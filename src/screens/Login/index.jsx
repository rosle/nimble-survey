import { useState } from 'react';
import Auth from '../../helpers/auth';
import Input from 'components/Input';
import FormError from 'components/FormError';

const Login = () => {
  const [formErrors, setFormErrors] = useState([]);
  const [isFormProcessing, setIsFormProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors([]);
    setIsFormProcessing(true);

    const formData = new FormData(event.target);

    try {
      await Auth.login(formData.get('email'), formData.get('password'));
      alert('Success');
    } catch (error) {
      setFormErrors(error.errors);
    }

    setIsFormProcessing(false);
  };

  return (
    <div className="login-screen">
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
