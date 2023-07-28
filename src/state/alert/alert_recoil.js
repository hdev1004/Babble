import { atom } from "recoil";
//버전 문제 참고 : https://velog.io/@ctdlog/Recoil-Local-Storage-Persistence

export const changeNameAlertState = atom({
  key: "changeNameAlert",
  default: false,
});

export const commentRemoveAlertState = atom({
  key: "commentRemoveAlert",
  default: false,
});
