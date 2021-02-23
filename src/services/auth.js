import AuthApi from 'services/api/auth';

const Auth = () => {
  const login = async (email, password) => {
    try {
      console.log(password);
      await AuthApi.login({ email, password });
      // TODO: Store tokens and redirect to survey list
      return true;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    login,
  };
};

export default Auth();
