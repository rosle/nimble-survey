import axios from 'axios';

const requestManager = () => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
  });

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
