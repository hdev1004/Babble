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


export const boardRemoveAlertState = atom({
  key: "boardRemoveAlert",
  default: false
})

export const inquireAnswerAlertState = atom({
  key: 'inquireAnswerAlert',
  default: false
})

export const withdrawalAlertState = atom({
  key:'withdrawalAlert',
  default: false
})