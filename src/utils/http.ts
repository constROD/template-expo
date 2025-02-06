import axios from 'axios';

import { envConfig } from '@/env';

const publicAxiosInstance = axios.create();

const privateAxiosInstance = axios.create({ baseURL: envConfig.API_URL });

// privateAxiosInstance.interceptors.request.use(request => {
//   request.headers.Authorization = `Bearer ${useSessionStore.getState().session?.access_token}`;
//   return request;
// });

export const publicHttpClient = publicAxiosInstance;
export const privateHttpClient = privateAxiosInstance;
