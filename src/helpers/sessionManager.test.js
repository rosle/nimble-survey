import sessionManager from './sessionManager';
import { useLocalStorageMock } from 'testHelpers';

describe('sessionManager', () => {
  const user = {
    email: 'john@email.com',
    avatarUrl: 'https://api.adorable.io/avatar/john@email.com',
  };

  const userInJson = JSON.stringify(user);
  const localStorageMock = useLocalStorageMock();

  describe('setUser', () => {
    it('saves the user to the local storage', () => {
      sessionManager.setUser(user);

      expect(localStorageMock.getItem('user')).toEqual(userInJson);
    });
  });

  describe('getUser', () => {
    it('parses and returns the user object from the local storage', () => {
      localStorageMock.setItem('user', userInJson);

      expect(sessionManager.getUser()).toEqual(user);
    });
  });

  describe('clearSession', () => {
    it('clears user in the local storage', () => {
      localStorageMock.setItem('user', userInJson);

      sessionManager.clearSession();

      expect(localStorageMock.getItem('user')).toBeUndefined();
    });
  });
});
