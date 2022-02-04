import tokenManager from './tokenManager';
import { useLocalStorageMock } from 'testHelpers';

describe('tokenManager', () => {
  const localStorageMock = useLocalStorageMock();

  describe('setToken', () => {
    it('saves the access and refresh token to the local storage', () => {
      tokenManager.setToken({
        accessToken: 'TOKEN_A',
        refreshToken: 'TOKEN_B',
      });

      expect(localStorageMock.getItem('accessToken')).toEqual('TOKEN_A');
      expect(localStorageMock.getItem('refreshToken')).toEqual('TOKEN_B');
    });
  });

  describe('getAccessToken', () => {
    it('returns the access token in the local storage', () => {
      localStorageMock.setItem('accessToken', 'TOKEN_A');

      expect(tokenManager.getAccessToken()).toEqual('TOKEN_A');
    });
  });

  describe('getRefreshToken', () => {
    it('returns the refresh token in the local storage', () => {
      localStorageMock.setItem('refreshToken', 'TOKEN_B');

      expect(tokenManager.getRefreshToken()).toEqual('TOKEN_B');
    });
  });

  describe('clearToken', () => {
    it('clears all items in the local storage', () => {
      localStorageMock.setItem('accessToken', 'TOKEN_A');
      localStorageMock.setItem('refreshToken', 'TOKEN_B');

      tokenManager.clearToken();

      expect(localStorageMock.getItem('accessToken')).toBeUndefined();
      expect(localStorageMock.getItem('refreshToken')).toBeUndefined();
    });
  });
});
