import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { LoginDiv, LoginForm, LoginTitle, LoginInputDiv, LoginBtn, LoginAuth, LoginFind } from "./Component/style";
import naver from "../../../images/naver.png";
import kakao from "../../../images/kakao.png";
//global
import ClassicInput from "global/Component/classicInput_01";

const ClientLogin = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [loginState, setLoginState] = useRecoilState(loginInfoState);

    return (
        <LoginDiv>
            <LoginForm>
            <LoginTitle>
                babble
            </LoginTitle>

            <LoginInputDiv>
               <ClassicInput text={"아이디 입력"} value={id} setValue={setId}></ClassicInput>

               <ClassicInput text={"비밀번호 입력"} value={pw} setValue={setPw} type="password"></ClassicInput>
            </LoginInputDiv>
           

            <LoginBtn>
                로 그 인
            </LoginBtn>


            <LoginAuth>
                <div>
                    <img src = {naver} alt = "네이버" style={{marginRight: "30px"}}/>
                </div>

                <div>
                    <img src = {kakao} alt = "카카오톡" style={{marginLeft: "30px"}}/>
                </div>
            </LoginAuth>


            <LoginFind>
                <div className="footer_menu line1">
                    아이디 찾기
                </div>

                <div className="footer_menu line2">
                    비밀번호 찾기
                </div>

                <div className="footer_menu">
                    회원가입
                </div>

            </LoginFind>

            </LoginForm>

        </LoginDiv>
    )
}

export default ClientLogin;