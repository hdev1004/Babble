import React from "react";
import { ProfileDiv, ProfileForm, ProfileMenuForm, ProfileSubMenuForm, ProfileUser, ProfileUserForm } from "./css/MyPageProfile";
import account_black from "images/account_black.png";

const App = ({tab, setTab}) => {
    return (
        <ProfileDiv>
            <ProfileForm>
                <ProfileUserForm>
                    <div className="user">
                        <img src={account_black}></img>
                    </div>
                    <div className="nickname">
                        닉네임
                    </div>
                    <div className="email">
                        이메일
                    </div>
                </ProfileUserForm>

                <ProfileMenuForm>
                    <div className={tab === "profile" ? "menu active" : "menu"} onClick={() => {setTab("profile")}}>프로필 설정</div>
                    <div className={tab === "board" ? "menu active" : "menu"} onClick={() => {setTab("board")}}>게시글 관리</div>
                    <div className={tab === "comment" ? "menu active" : "menu"} onClick={() => {setTab("comment")}}>댓글 관리</div>
                    <div className={tab === "history" ? "menu active" : "menu"} onClick={() => {setTab("history")}}>이력 관리</div>
                </ProfileMenuForm>

                <hr></hr>

                <ProfileSubMenuForm>
                    <div className="menu">문의하기</div>
                    <div className="menu">로그아웃</div>
                    <div className="menu">회원탈퇴</div>
                </ProfileSubMenuForm>
            </ProfileForm>
        </ProfileDiv>
    )
}

export default App;
