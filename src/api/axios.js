import axios from "axios";
// import { updateAccessToken } from "./auth";

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const axiosPublic = axios.create({ baseURL: BASE_URL });

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;
      try {
        // const newAccessToken = await updateAccessToken();
        // localStorage.setItem("accessToken", newAccessToken);

        // originalRequest.headers = { ...originalRequest.headers, Authorization: `Bearer ${newAccessToken}` };
        // return await axiosPrivate(originalRequest);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.clear();
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);
