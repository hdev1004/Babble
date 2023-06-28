import React from "react";
import { ProfileDiv, ProfileForm, ProfileMenuForm, ProfileSubMenuForm, ProfileUser, ProfileUserForm } from "./css/MyPageProfile";
import account_black from "images/account_black.png";

const App = () => {
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
                    <div className="menu">프로필 설정</div>
                    <div className="menu">게시글 관리</div>
                    <div className="menu">댓글 관리</div>
                    <div className="menu">이력 관리</div>
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
