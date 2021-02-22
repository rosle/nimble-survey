import { useContext, useState } from 'react';
import Auth from 'helpers/auth';
import Input from 'components/Input';
import FormError from 'components/FormError';
import { Redirect } from 'react-router-dom';
import UserContext from 'contexts/User';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [formErrors, setFormErrors] = useState([]);
  const [isFormProcessing, setIsFormProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors([]);
    setIsFormProcessing(true);

    const formData = new FormData(event.target);

    try {
      const user = await Auth.login(
        formData.get('email'),
        formData.get('password')
      );

      setUser(user);
    } catch (error) {
      setIsFormProcessing(false);
      setFormErrors(error.errors);
    }
  };

  const hasError = formErrors.length > 0;

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="screen screen__login">
      <form id="loginForm" className="form" onSubmit={handleSubmit}>
        <legend>Sign in to Nimble</legend>

        <FormError errors={formErrors} />

        <div className="form__group">
          <Input name="email" type="email" label="Email" required />
        </div>

        <div className="form__group">
          <Input name="password" type="password" label="Password" required />
          <a href="/">Forgot?</a>
        </div>

        <div className="form__action">
          <Input type="submit" value="Sign in" disabled={isFormProcessing} />
        </div>
      </form>
    </div>
  );
};

export default Login;
