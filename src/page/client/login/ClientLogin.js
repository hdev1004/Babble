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
                L o g i n
            </LoginTitle>

            <LoginInputDiv>
                <input value={loginState.id}>
                </input>

                <input value={loginState.pw}>
                    
                </input>
            </LoginInputDiv>
           

            <LoginBtn>
                로그인
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