import Auth from 'helpers/auth';
// import sessionManager from 'helpers/sessionManager';
import tokenManager from 'helpers/tokenManager';

const refreshToken = (client) => {
  client.interceptors.response.use(null, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await Auth.refreshToken();

        const newBearerToken = `Bearer ${tokenManager.getAccessToken()}`;
        originalRequest.headers['Authorization'] = newBearerToken;

        return client(originalRequest);
      } catch {
        // Need to logout?
        // tokenManager.clearToken();
        // sessionManager.clearSession();
      }
    }

    return Promise.reject(error);
  });
};

export default refreshToken;
