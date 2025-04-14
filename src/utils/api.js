'use client';
import axios from 'axios';
import { getToken } from './storage';

// Create an Axios instance with default headers
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: 'https://api-teamwork.kevin-satria.my.id',
  timeout: 10000,
  mode: 'cors',
});

// Add a request interceptor to set the authorization header on every request
api.interceptors.request.use(
  async function (config) {
    const token = await getToken();

    if (token) {
      config.headers.Token = `${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export default api;
