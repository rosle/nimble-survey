import axios from 'axios';

import refreshToken from 'helpers/requestInterceptors/refreshToken';

const requestManager = () => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
  });

  refreshToken(client);

  const request = async (options) => {
    try {
      const response = await client.request(options);
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  };

  return { request };
};

export default requestManager();
