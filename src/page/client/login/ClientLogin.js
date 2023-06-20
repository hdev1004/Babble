import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { LoginDiv, LoginForm, LoginTitle, LoginInputDiv, LoginBtn, LoginAuth, LoginFind, PasswordView } from "./css/login";
import naver from "images/naver.png";
import kakao from "images/kakao.png";
//global
import ClassicInput from "global/Component/classicInput_01";
import { Link } from "react-router-dom";

const ClientLogin = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwView, setPwView] = useState(false);

    const [loginState, setLoginState] = useRecoilState(loginInfoState);

    return (
        <LoginDiv>
            <LoginForm>
            <LoginTitle>
                babble
            </LoginTitle>

            <LoginInputDiv>
               <ClassicInput text={"아이디 입력"} value={id} setValue={setId}></ClassicInput>

               <ClassicInput text={"비밀번호 입력"} value={pw} setValue={setPw} type="password">
               </ClassicInput>
               
            </LoginInputDiv>
           

            <LoginBtn>
                <Link to={"/board"}>
                로 그 인
                </Link>
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
            
                 <span className="footer_menu line1">
                    <Link to = "/find_id">
                        아이디 찾기
                    </Link>
                </span>
             
                <div className="footer_menu line2">
                    <Link to = "/find_pw">
                        비밀번호 찾기
                    </Link>
                </div>

                <div className="footer_menu">
                    <Link to = "/register">
                    회원가입
                    </Link>
                </div>

            </LoginFind>

            </LoginForm>

        </LoginDiv>
    )
}

export default ClientLogin;