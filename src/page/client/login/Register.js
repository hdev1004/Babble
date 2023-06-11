import React from "react";
import { RegisterDiv, RegisterForm, RegisterTitle, RegisterBody, RegisterRow, RegisterTableTitle, RegisterInput, RegisterNoti, RegisterLine, RegisterButton, RegisterSubmit, RegisterEmail} from "./css/register";
import { useNavigate } from "react-router-dom";

const App = () => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
        <RegisterDiv>
            <RegisterForm>
                <RegisterTitle onClick={goHome}>
                    babble
                </RegisterTitle>

                <RegisterBody>
                    <RegisterRow>
                        <RegisterTableTitle>아이디</RegisterTableTitle>
                        <RegisterInput placeholder="아이디를 입력해 주세요."></RegisterInput>
                        <RegisterNoti>4자~16자의 영문 또는 숫자의 조합</RegisterNoti>
                    </RegisterRow>


                    <div style={{marginTop: "42px"}}></div>


                    <RegisterRow>
                        <RegisterTableTitle>비밀번호</RegisterTableTitle>
                        <RegisterInput placeholder="비밀번호를 입력해 주세요."></RegisterInput>
                        <RegisterNoti>8자~15자의 대/소문자, 숫자 및 특수문자 조합으로만 가능합니다.</RegisterNoti>
                    </RegisterRow>


                    <div style={{marginTop: "42px"}}></div>


                    <RegisterRow>
                        <RegisterTableTitle>비밀번호 확인</RegisterTableTitle>
                        <RegisterInput placeholder="비밀번호를 입력해 주세요."></RegisterInput>
                        <RegisterNoti>비밀번호가 일치하지 않습니다.</RegisterNoti>
                    </RegisterRow>

                    <div style={{marginTop: "42px"}}></div>


                    <RegisterRow>
                        <RegisterTableTitle>이메일</RegisterTableTitle>
                        <RegisterEmail>
                            <input className="email_id"></input> 
                            <span> @ </span>
                            <select>
                                <option>naver.com</option>
                                <option>daum.com</option>
                                <option>kakao.com</option>
                                <option>gmail.com</option>
                                <option>직접입력</option>
                            </select>
                            <input className="email_tail"></input> 
                        </RegisterEmail>
                        
                    </RegisterRow>

                    
                    <div style={{marginTop: "42px"}}></div>

                    <RegisterLine></RegisterLine>

                    <div style={{marginTop: "42px"}}></div>

                    <RegisterRow>
                        <RegisterTableTitle>닉네임</RegisterTableTitle>
                        <RegisterInput placeholder="닉네임을 입력해 주세요."></RegisterInput>
                        <RegisterButton>중복확인</RegisterButton>
                        
                        <RegisterNoti>사용할 닉네임은 한글과 숫자를 포함하여 3-8자, 영어는 3-16자까지 가능하며,
‘babble’, ‘관리자’란 단어는 관리자 계정에 포함되므로 사용할 수 없습니다.</RegisterNoti>
                    </RegisterRow>



                    <div style={{marginTop: "77px"}}></div>

                    <RegisterSubmit> 
                        회원가입
                    </RegisterSubmit>
                </RegisterBody>
            </RegisterForm>
        </RegisterDiv>
    )
}

export default App;