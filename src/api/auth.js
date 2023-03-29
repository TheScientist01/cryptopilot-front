import { axiosPrivate, axiosPublic } from "./axios";

export const logout = async () => {
  const url = "/auth/logout";
  return await axiosPrivate.post(
    url,
    {},
    {
      "Authorization-Refresh": `${localStorage.getItem("refreshToken")}`,
      withCredentials: true,
    }
  );
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
