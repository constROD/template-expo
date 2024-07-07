import axios from 'axios';
import Constants from 'expo-constants';

import { useSessionStore } from '@/hooks/stores/use-session-store';

const getBaseUrl = () => {
  const localhost = Constants.expoConfig?.hostUri?.split(':')[0] ?? 'localhost';
  return __DEV__ ? `http://${localhost}:3000` : /* envConfig.API_URL */ '';
};

const publicAxiosInstance = axios.create();

const privateAxiosInstance = axios.create({ baseURL: getBaseUrl() });

privateAxiosInstance.interceptors.request.use(request => {
  request.headers.Authorization = `Bearer ${useSessionStore.getState().session?.access_token}`;
  return request;
});

export const publicHttpClient = publicAxiosInstance;
export const privateHttpClient = privateAxiosInstance;
