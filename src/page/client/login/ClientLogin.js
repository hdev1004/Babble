import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { LoginDiv, LoginForm, LoginTitle, LoginInputDiv, LoginBtn, LoginAuth, LoginFind } from "./Component/style";

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
                    네이버
                </div>

                <div>
                    구글
                </div>
            </LoginAuth>


            <LoginFind>
                <div>
                    아이디 찾기
                </div>

                <div>
                    비밀번호 찾기
                </div>

                <div>
                    회원가입
                </div>

            </LoginFind>

            </LoginForm>

        </LoginDiv>
    )
}

export default ClientLogin;