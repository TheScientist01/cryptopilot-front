import JSEncrypt from "jsencrypt";

const encrypt = (password, key) => {
  const encryptor = new JSEncrypt();

  encryptor.setPublicKey(key);

  const encryptedPassword = encryptor.encrypt(password);

  if (encryptedPassword === false) {
    return null;
  } else {
    return encryptedPassword;
  }
};

export default encrypt;