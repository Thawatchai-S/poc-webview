import axios from 'axios';
const instance = axios.create();

/* default request */
// axios.defaults.timeout = 3000;
instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  async error => {
    return Promise.reject(error?.response || error);
  }
);

/* default response */
instance.interceptors.request.use(
  config => {
    var token = localStorage.getItem('access_token');
    // console.log("interceptors get token ",token)
    // var token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyOTExYjRiZC1kYTVlLTQwNWYtYTljYy0zZDdmZDMyZTc4ZTAiLCJpYXQiOjE3MjM1MzY2NTIsImlzcyI6ImRwLWJhbmNhLXN0cy1iZSIsImV4cCI6MTcyNDE0MTQ1Miwic2VjIjoiYzQ0ODhjNjRmYWI0MTRjOGM3NTM3Yjc3YzhhYmYxYTBjMWQ0Mjc1YzhjMWI0MzNiYTAwNDBkOWU1NDU4MGQzYiIsInVzZXJuYW1lIjoiOTk5OTk5OTk5MiIsInN0YXR1cyI6IkFjdGl2ZSIsImNsaWVudF9pZCI6Im1zdWItMSJ9.LktS0Ak8R9tKFM-nx2pitv8hcMuHD2IDkyJdoFpAmgs';

    // if (token) {
    // config.headers.Authorization = `Bearer ${token}`;
    config.headers[`X-API-Key`] =
      'TCp5DctUc4Ji10nSYZ5Pr1PGzy8l7R7XFGKQ+z4Cky8=';
    config.timeout = 100000;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};
