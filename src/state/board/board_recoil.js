import { atom } from "recoil";
//버전 문제 참고 : https://velog.io/@ctdlog/Recoil-Local-Storage-Persistence

export const replyComment = atom({
    key: "replyComment",
    default: {
        nickname: undefined,
        target_token: undefined,
        writer_token: undefined
    },
  });
