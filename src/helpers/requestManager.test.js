import requestManager from './requestManager';
import { usePolly } from 'testHelpers';

describe('requestManager', () => {
  describe('request', () => {
    it('given the request is successful, returns the API response', async () => {
      const requestOptions = {
        method: 'get',
        url: '/api/v1/me',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TEST_ACCESS_TOKEN}`,
        },
      };

      const expectedResponse = {
        data: {
          id: '41',
          type: 'user',
          attributes: {
            email: 'rossukhon@nimblehq.co',
            avatarUrl: 'https://api.adorable.io/avatar/rossukhon@nimblehq.co',
          },
        },
      };

      const polly = usePolly('user/get_user_profile_success');

      await expect(requestManager.request(requestOptions)).resolves.toEqual(
        expectedResponse
      );

      await polly.stop();
    });

    it('given the request is failed, returns errors', async () => {
      const requestOptions = {
        method: 'get',
        url: '/api/v1/me',
        headers: { Authorization: `Bearer invalid_token` },
      };

      const expectedResponse = {
        errors: [
          {
            code: 'invalid_token',
            detail: 'The access token is invalid',
            source: 'unauthorized',
          },
        ],
      };

      const polly = usePolly('user/get_user_profile_failed');

      await expect(requestManager.request(requestOptions)).rejects.toEqual(
        expectedResponse
      );

      await polly.stop();
    });
  });
});
