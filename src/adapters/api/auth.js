import requestManager from 'helpers/requestManager';
import tokenManager from 'helpers/tokenManager';

const Auth = () => {
  const api_secret = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };

  const login = ({ email, password }) => {
    const data = {
      grant_type: 'password',
      email: email,
      password: password,
      ...api_secret,
    };

    return requestManager.request({
      method: 'post',
      url: '/api/v1/oauth/token',
      data: data,
    });
  };

  const logout = () => {
    const data = {
      token: tokenManager.getAccessToken(),
      ...api_secret,
    };

    return requestManager.request({
      method: 'post',
      url: '/api/v1/oauth/revoke',
      data: data,
    });
  };

  const refreshToken = () => {
    const data = {
      grant_type: 'refresh_token',
      refresh_token: tokenManager.getRefreshToken(),
      ...api_secret,
    };

    return requestManager.request({
      method: 'post',
      url: '/api/v1/oauth/token',
      data: data,
    });
  };

  return {
    login,
    logout,
    refreshToken,
  };
};

export default Auth();
