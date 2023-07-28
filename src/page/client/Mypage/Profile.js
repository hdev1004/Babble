import React, { useState } from "react";
import {
  ProfileForm,
  ProfileBottom,
  ProfileEmail,
  ProfileNickname,
  ProfileRow,
  ProfileTop,
  Change,
} from "./css/Profile";

import account_black from "images/account_black.png";
import email from "images/email.png";
import profilePw from "images/profile_pw.png";
import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { changeNameAlertState } from "state/alert/alert_recoil";
import RecentLog from "images/RecentLog.png";
import LastInfoList from "images/lastInfoList.png";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
  const [changeName, setChangeName] = useRecoilState(changeNameAlertState);
  let navigate = useNavigate();
  const moveHandle = (id) => {
    navigate(id);
  };

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

          <Change
            right="37px"
            top="50%"
            Margintop="-20px"
            onClick={() => {
              setChangeName(true);
            }}
          >
            닉네임 변경
          </Change>
        </ProfileNickname>

        <div className="line"></div>

        <ProfileEmail>
          <div className="img">
            <img src={email}></img>
          </div>
          <div className="email">{loginInfo.email}</div>
          <Change right="37px" top="50%" Margintop="-20px">
            수정
          </Change>
        </ProfileEmail>
      </ProfileTop>

      <ProfileBottom>
        <div className="profileSetting_pw pw_div">
          <div>
            <img src={profilePw} alt="패스워드" />
          </div>
          <span>비밀번호</span>
          <Change className="update">수정</Change>
        </div>

        <div className="profileSetting_pw">
          <div>
            <img src={RecentLog} alt="최근로그인" />
          </div>
          <span>최근 로그인</span>
          <div className="date">2023.06.01</div>
        </div>

        <div className="profileSetting_pw border_last">
          <div>
            <img src={LastInfoList} alt="정보수정 이력" />
          </div>
          <div className="font">마지막 정보수정 이력</div>
          <div className="date">없음</div>
        </div>
        <div
          className="secession"
          onClick={() => {
            moveHandle("/withdrawal");
          }}
        >
          회원탈퇴 &gt;
        </div>
      </ProfileBottom>
    </ProfileForm>
  );
};

export default App;
