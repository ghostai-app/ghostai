import axios from "axios";
import { CreateAxiosDefaults } from "axios";
import { ACCESS_TOKEN_KEY } from "../constants";
import Cookies from "js-cookie";

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export { axiosClassic, axiosWithAuth };
