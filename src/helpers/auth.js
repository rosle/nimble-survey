import AuthApi from 'adapters/api/auth';

const Auth = () => {
  const login = async (email, password) => {
    try {
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
