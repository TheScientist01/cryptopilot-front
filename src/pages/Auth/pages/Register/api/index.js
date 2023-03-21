import axios from "axios";

export const registerUser = async (body) => {
  const res = await axios.post("https://nest-v1.onrender.com/auth/register", body);
  return res;
};
