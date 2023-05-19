import { atom } from "recoil";

export const loginInfoState = atom({
    key: 'loginInfo', // 유니크한 ID
    default: {
        id: "test",
        pw: "test",
        token: "abcd"
    }, // 기본값
  });