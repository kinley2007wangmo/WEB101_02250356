import axios from "axios";

const API_Base_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_Base_URL,
  header: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (response) => response, 
  (error) => {

    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.herf = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;