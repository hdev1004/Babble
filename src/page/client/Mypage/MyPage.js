import React from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from "page/client/Board/Main/Function/jwt";
import { loginInfoState } from "state/login/recoil";
import { useRecoilValue } from "recoil";
import {  MyPageDiv } from "./css/MyPage";
import MyPageDetail from "./MyPageDetail";
import MyPageProfile from "./MyPageProfile";

const App = () => {
    const navigate = useNavigate();
    const loginState = useRecoilValue(loginInfoState); 

    jwt.check_token(loginState, navigate);

    return (
        <MyPageDiv>
            <MyPageProfile>
            </MyPageProfile>

            <MyPageDetail>
            </MyPageDetail>
        </MyPageDiv>
    )
}

export default App;