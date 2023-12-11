import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API = axios.create({
  baseURL: 'http://192.168.0.101:3001',
  timeout: 20000,
});

API.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    console.log(config, 'asd');
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  },
);
