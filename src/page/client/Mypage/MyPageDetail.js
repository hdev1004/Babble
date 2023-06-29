import React from "react";
import { DetailDiv } from "./css/MyPageDetail";

const App = () => {
    return (
        <DetailDiv>
            <div className="form">
                <div className="top">
                    <div>
                        사진
                    </div>
                    <div>
                        <div>닉네임</div>
                        <div>이메일</div>
                    </div>
                    <div>
                        닉네임 변경
                    </div>
                </div>

                <div className="bottom">
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
                </div>
            </div>
        </DetailDiv>
    )
}

export default App;
