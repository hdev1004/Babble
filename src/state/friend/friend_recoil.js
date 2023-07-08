import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
//버전 문제 참고 : https://velog.io/@ctdlog/Recoil-Local-Storage-Persistence

const { persistAtom } = recoilPersist()

export const friendReqState = atom({
    key: 'friendReqState',
    isFriendReq: false,
    effects_UNSTABLE: [persistAtom]
});