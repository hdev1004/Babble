import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
//버전 문제 참고 : https://velog.io/@ctdlog/Recoil-Local-Storage-Persistence

const { persistAtom } = recoilPersist()

export const loginInfoState = atom({
    key: 'loginInfo', // 유니크한 ID
    default: {
        id: "",
        token: "",
        nickname: "",
        access_token: "",
        email: "",
    }, // 기본값
    effects_UNSTABLE: [persistAtom]
  });