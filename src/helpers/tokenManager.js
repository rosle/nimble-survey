const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

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

  const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN);
  };

  const clearToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  };

  return {
    setToken,
    getAccessToken,
    getRefreshToken,
    clearToken,
  };
};

export default tokenManager();
