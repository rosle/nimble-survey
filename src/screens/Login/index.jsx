import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors([]);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/api/v1/oauth/token`,
        {
          grant_type: 'password',
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }
      );

      console.log(response);
    } catch (error) {
      setFormErrors(error.response.data.errors);
    }
  };

  const hasError = formErrors.length > 0;

  return (
    <div className="login-screen">
      <form className="form" onSubmit={handleSubmit}>
        <legend>Sign in to Nimble</legend>

        {hasError && (
          <div className="form__error">
            <div className="form__error-title">Error</div>
            <ul>
              {formErrors.map((error, index) => (
                <li key={index}>{error.detail}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="email" required />
        </div>

        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="password" required />
          <a href="/">Forgot?</a>
        </div>

        <div className="form__action">
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
};

export default Login;
