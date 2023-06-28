import React from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from "page/client/Board/Main/Function/jwt";
import { loginInfoState } from "state/login/recoil";
import { useRecoilValue } from "recoil";
import {  MyPageDiv } from "./css/MyPage";
import MyPageDetail from "./MyPageDetail";
import MyPageProfile from "./MyPageProfile";
import { motion } from "framer-motion";

const App = () => {
    const navigate = useNavigate();
    const loginState = useRecoilValue(loginInfoState); 

    jwt.check_token(loginState, navigate);

    return (
        <motion.div className="body" style={{
            display: "flex",
            flexDirection: "row",
            height: "1080px",
            minWidth: "1300px"
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <MyPageProfile>
            </MyPageProfile>

            <MyPageDetail>
            </MyPageDetail>
        </motion.div>
    )
}

export default App;