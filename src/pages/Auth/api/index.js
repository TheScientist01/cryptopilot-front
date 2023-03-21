import axios from "axios";

export const getEncryptionKey =async () => {
    const res=await axios.get("https://nest-v1.onrender.com/auth/key");
    return res;
};