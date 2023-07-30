import CryptoJS from 'crypto-js';
const iterations = 44531;

export const createToken = () => {
    let data = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
    return data;
}

export const createSalt = () => {
    let salt = CryptoJS.lib.WordArray.random(64).toString(CryptoJS.enc.Base64);

    return salt;
}

export const encryptPassword = (password, salt) => {
    const encryptedPassword = CryptoJS.PBKDF2(password, salt, {
      keySize: 16,
      iterations: iterations
    }).toString(CryptoJS.enc.Base64);
  
    return {encryptedPassword, salt};
}

export const validatePassword = (password, salt, userPassword) => {
    const hashedPassword = encryptPassword(password, salt).encryptedPassword;
    console.log("1 : ", hashedPassword)
    console.log("2 : ", userPassword);
  
    return hashedPassword === userPassword;
}
  
