import React from "react";
import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { LoginDiv, LoginForm, LoginTitle, LoginInputDiv, LoginBtn, LoginAuth, LoginFind } from "./Component/style";

const ClientLogin = () => {

    const [loginState, setLoginState] = useRecoilState(loginInfoState);

    return (
        <LoginDiv>
            <LoginForm>
            <LoginTitle>
                babble
            </LoginTitle>

            <LoginInputDiv>
                <input value={loginState.id} placeholder="아이디 입력">
                </input>

                <input value={loginState.pw} placeholder="비밀번호 입력">
                    
                </input>
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