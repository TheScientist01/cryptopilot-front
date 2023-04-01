import axios from "axios";
import { BASE_URL } from "../../../../../api/axios";

export const login = async (body) => {
  const res = await axios.post(`${BASE_URL}/auth/login`, body);
  return res;
};
