const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

const tokenManager = () => {
  const setToken = ({
    access_token: accessToken,
    refresh_token: refreshToken,
  }) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  };

  const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
  };

  const clearToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  };

  return {
    setToken,
    getAccessToken,
    clearToken,
  };
};

export default tokenManager();
