import axios from "axios";
import { BASE_URL } from "../../../../../api/axios";

export const registerUser = async (body) => {
  const res = await axios.post(`${BASE_URL}/auth/register`, body);
  return res;
};
