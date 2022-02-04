import requestManager from 'helpers/requestManager';
import tokenManager from 'helpers/tokenManager';

import User from './user';

describe('User', () => {
  describe('getProfile', () => {
    it('sends get request to profile API', () => {
      requestManager.request = jest.fn();
      jest
        .spyOn(tokenManager, 'getAccessToken')
        .mockReturnValue('ACCESS_TOKEN');

      User.getProfile();

      expect(requestManager.request).toHaveBeenCalledTimes(1);
      expect(requestManager.request).toHaveBeenCalledWith({
        method: 'get',
        url: '/api/v1/me',
        headers: {
          Authorization: 'Bearer ACCESS_TOKEN',
        },
      });
    });
  });
});
