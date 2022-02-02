import requestManager from 'helpers/requestManager';
import tokenManager from 'helpers/tokenManager';
import { useEnvMock } from 'testHelpers';

import Auth from './auth';

describe('Auth', () => {
  useEnvMock({
    REACT_APP_CLIENT_ID: 'CLIENT_ID',
    REACT_APP_CLIENT_SECRET: 'CLIENT_SECRET',
  });

  describe('login', () => {
    it('sends post request to login API', () => {
      requestManager.request = jest.fn();

      Auth.login({ email: 'john@test.com', password: 'supersecret' });

      expect(requestManager.request).toHaveBeenCalledTimes(1);
      expect(requestManager.request).toHaveBeenCalledWith({
        method: 'post',
        url: '/api/v1/oauth/token',
        data: {
          grant_type: 'password',
          email: 'john@test.com',
          password: 'supersecret',
          client_id: 'CLIENT_ID',
          client_secret: 'CLIENT_SECRET',
        },
      });
    });
  });

  describe('logout', () => {
    it('sends post request to logout API', () => {
      requestManager.request = jest.fn();
      jest
        .spyOn(tokenManager, 'getAccessToken')
        .mockReturnValue('ACCESS_TOKEN');

      Auth.logout();

      expect(requestManager.request).toHaveBeenCalledTimes(1);
      expect(requestManager.request).toHaveBeenCalledWith({
        method: 'post',
        url: '/api/v1/oauth/revoke',
        data: {
          token: 'ACCESS_TOKEN',
          client_id: 'CLIENT_ID',
          client_secret: 'CLIENT_SECRET',
        },
      });
    });
  });

  describe('refreshToken', () => {
    it('sends post request to refresh token API', () => {
      requestManager.request = jest.fn();
      jest
        .spyOn(tokenManager, 'getRefreshToken')
        .mockReturnValue('REFRESH_TOKEN');

      Auth.refreshToken();

      expect(requestManager.request).toHaveBeenCalledTimes(1);
      expect(requestManager.request).toHaveBeenCalledWith({
        method: 'post',
        url: '/api/v1/oauth/token',
        data: {
          grant_type: 'refresh_token',
          refresh_token: 'REFRESH_TOKEN',
          client_id: 'CLIENT_ID',
          client_secret: 'CLIENT_SECRET',
        },
      });
    });
  });
});
