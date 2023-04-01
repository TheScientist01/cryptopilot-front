import axios from "axios";
import { BASE_URL } from "../../../api/axios";

export const getEncryptionKey =async () => {

    const res=await axios.get(`${BASE_URL}/auth/key`);
    return res;
};