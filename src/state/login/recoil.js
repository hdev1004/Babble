import { atom } from "recoil";

export const loginInfoState = atom({
    key: 'loginInfo', // 유니크한 ID
    default: {
        id: "",
        pw: "",
        token: "abcd"
    }, // 기본값
  });