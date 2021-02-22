import AuthApi from 'adapters/api/auth';
import UserApi from 'adapters/api/user';
import tokenManager from 'helpers/tokenManager';
import sessionManager from 'helpers/sessionManager';

const Auth = () => {
  const login = async (email, password) => {
    try {
      const {
        data: { attributes: token },
      } = await AuthApi.login({ email, password });

      tokenManager.setToken(token);

      const {
        data: { attributes: user },
      } = await UserApi.getProfile();

      sessionManager.setUser(user);

      return user;
    } catch (error) {
      tokenManager.clearToken();
      sessionManager.clearSession();

      return Promise.reject(error);
    }
  };

  const logout = async () => {
    try {
      await AuthApi.logout();

      tokenManager.clearToken();
      sessionManager.clearSession();

      return true;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    login,
    logout,
  };
};

export default Auth();
