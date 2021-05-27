import axios from 'axios';
import axiosRetry, { isNetworkOrIdempotentRequestError } from 'axios-retry';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
  timeout: 20000,
});

axiosRetry(api, {
  retries: 0,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: error => {
    return (
      isNetworkOrIdempotentRequestError(error) ||
      error?.response?.status === 422
    );
  },
});

export default api;
