import type { AuthProvider } from "@refinedev/core";
import Cookies from "js-cookie";
import { axiosClassic, axiosWithAuth } from "../api";
import { ACCESS_TOKEN_KEY } from "../constants";

const API_URL = import.meta.env.VITE_API_URL;

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const { data } = await axiosClassic.post(`${API_URL}/admins/login`, {
        email,
        password,
      });

      Cookies.set(ACCESS_TOKEN_KEY, data.token);

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          name: "LoginError",
          message:
            error.response?.data?.message ||
            "Неверное имя пользователя или пароль",
        },
      };
    }
  },
  logout: async () => {
    Cookies.remove(ACCESS_TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const token = Cookies.get(ACCESS_TOKEN_KEY);

    if (!token) {
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }

    const { data } = await axiosWithAuth.get(`${API_URL}/admins/me`);

    if (data) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = Cookies.get(ACCESS_TOKEN_KEY);
    if (!token) {
      return null;
    }

    const { data } = await axiosWithAuth.get(`${API_URL}/admins/me`);

    if (!data) {
      return null;
    }

    return data;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
