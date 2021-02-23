import request from 'helpers/requestManager';

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

  return request({
    method: 'post',
    url: '/api/v1/oauth/token',
    data: data,
  });
};

export { login };
