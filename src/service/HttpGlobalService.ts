import axios from 'axios';

const configToken = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 5000,
  headers: { 'Api-Key': 'test001' },
});

/* default response*/
configToken.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  async error => {
    return Promise.reject(error?.response || error);
  }
);

/* default request */
configToken.interceptors.request.use(
  config => {
    config.timeout = 10000;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  get: configToken.get,
  post: configToken.post,
  put: configToken.put,
  delete: configToken.delete,
  patch: configToken.patch,
};
