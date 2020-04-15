import axios from 'axios';

import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://192.168.10.23:5001',
});

api.interceptors.request.use(
  config => {
    if (store.getState().auth && store.getState().auth.token) {
      config.headers = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.response.status === 401) {
      store.dispatch(signOut());
    } else {
      return Promise.reject(err);
    }
  }
);

export default api;
