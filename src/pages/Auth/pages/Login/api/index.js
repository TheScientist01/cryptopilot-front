import axios from "axios";

export const login = async (body) => {
  const res = await axios.post("https://nest-v1.onrender.com/auth/login", body);
  return res;
};
