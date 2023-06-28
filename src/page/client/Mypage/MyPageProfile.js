import React from "react";
import { ProfileDiv } from "./css/MyPageProfile";

const App = () => {
    return (
        <ProfileDiv>
            <div>
                <div>
                    <div>
                        사진
                    </div>
                    <div>
                        닉네임
                    </div>
                    <div>
                        이메일
                    </div>
                </div>

                <div>
                    <div>프로필 설정</div>
                    <div>게시글 관리</div>
                    <div>댓글 관리</div>
                    <div>이력 관리</div>
                </div>

                <hr></hr>

                <div>
                    <div>문의하기</div>
                    <div>로그아웃</div>
                    <div>회원탈퇴</div>
                    
                </div>
            </div>
        </ProfileDiv>
    )
}

export default App;
