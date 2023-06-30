import React, { useState } from "react";
import { ProfileForm, ProfileBottom, ProfileEmail, ProfileNickname, ProfileRow, ProfileTop } from "./css/Profile";

import account_black from "images/account_black.png";
import email from "images/email.png";

import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";

const App = () => {
    const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);

    return (
        <ProfileForm>
            <ProfileTop>
                <ProfileNickname>
                    <div className="img">
                        <img src={account_black}></img>
                    </div>
                    <div className="info">
                        <div className="nickname">{loginInfo.nickname}</div>
                        <div className="email">{loginInfo.email}</div>
                    </div>

                    <div className="change">
                        닉네임 변경
                    </div>
                </ProfileNickname>

                <div className="line"></div>

                <ProfileEmail>
                    <div className="img">
                        <img src={email}></img>
                    </div>
                    <div className="email">
                        {loginInfo.email}
                    </div>
                    <div className="change">
                        수정
                    </div>
                </ProfileEmail>
            </ProfileTop>

            <ProfileBottom>
                <div>
                    <div>아이콘</div>
                    <div>비밀번호</div>
                </div>

                <div>
                    <div>아이콘</div>
                    <div>최근 로그인</div>
                    <div>날짜</div>
                </div>

                <div>
                    <div>아이콘</div>
                    <div>마지막 정보수정 이력</div>
                    <div>없음</div>
                </div>

                <div>
                    회원탈퇴 
                </div>
            </ProfileBottom>
        </ProfileForm>
    )
}

export default App;