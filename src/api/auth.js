import { axiosPrivate, axiosPublic } from "./axios";
import { BASE_URL } from "./axios";
import axios from "axios";

export const logout = async () => {
  axios.post(`${BASE_URL}/auth/logout`, { headers: { "access-token": localStorage.getItem("accessToken") } });
};

export const getCurrentUser = async () => {
  const url = "/me";
  const response = await axiosPrivate.get(url);
  return response.data;
};

// export const updateAccessToken = async () => {
//   const url = "/auth/refresh-token";
//   const response = await axiosPublic.post(
//     url,
//     {},
//     {
//       headers: {
//         "Authorization-Refresh": localStorage.getItem("refreshToken"),
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     }
//   );
//   return response.data.accessToken;
// };

export const changePassword = async (data) => {
  const url = "/auth/change-password";
  return await axiosPrivate.post(url, data);
};
