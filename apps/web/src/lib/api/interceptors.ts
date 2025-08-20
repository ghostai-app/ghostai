import axios, { type CreateAxiosDefaults, AxiosError } from "axios";
import { errorCatch } from "./error";
import {
  getAccessToken,
  removeFromStorage,
} from "@/services/auth-token.service";
import { ENV } from "../env";

const options: CreateAxiosDefaults = {
  baseURL: ENV.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000, // 10 секунд таймаут
  timeoutErrorMessage: "Request timeout",
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

const errorInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    removeFromStorage();
  }

  return Promise.reject(errorCatch(error));
};

axiosClassic.interceptors.response.use(undefined, errorInterceptor);
axiosWithAuth.interceptors.response.use(undefined, errorInterceptor);

export { axiosClassic, axiosWithAuth };
