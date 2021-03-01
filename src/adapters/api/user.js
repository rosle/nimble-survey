import requestManager from 'helpers/requestManager';
import tokenManager from 'helpers/tokenManager';

const User = () => {
  const getProfile = () => {
    return requestManager.request({
      method: 'get',
      url: '/api/v1/me',
      headers: {
        ..._authorizationHeader(),
      },
    });
  };

  const _authorizationHeader = () => {
    return { Authorization: `Bearer ${tokenManager.getAccessToken()}` };
  };

  return {
    getProfile,
  };
};

export default User();
