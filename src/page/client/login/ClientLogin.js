import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { LoginDiv, LoginForm, LoginTitle, LoginInputDiv, LoginBtn, LoginAuth, LoginFind, PasswordView } from "./css/login";
import naver from "images/naver.png";
import kakao from "images/kakao.png";
import {ScaleLoader } from "react-spinners";
import * as encryption from "./Function/encryption";
//global
import ClassicInput from "global/Component/classicInput_01";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ClientLogin = () => {
    const [loginState, setLoginState] = useState(false);
    const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            loginCheck();
        }
    }
    const loginCheck = async () => {
        setLoginState(true);
        let errorState = false;
        let pw_enc = "";

        //ID 체크 후 Salt값 받기
        await axios.get(process.env.REACT_APP_SERVER_URL + "/login/salt/" + id).then((res) => {
            let salt = res.data.data.salt;
            pw_enc = encryption.encryptPassword(pw, salt).encryptedPassword;
            
        }).catch((err) => {
            errorState = true;
            console.log("GET CONNECT ERROR");
            console.log(err);
        })
        if(errorState) {
            alert("오류가 발생했습니다 😿");
            setLoginState(false);
            return;
        }

        let data = {
            id: id,
            pw: pw_enc
        }

        let status = false;
        let get = null;
        //Login 체크
        await axios.post(process.env.REACT_APP_SERVER_URL + "/login", data).then((res) => {
            get = res.data.data;
            status =  Object.keys(get).length === 0 ? false : true;
        }).catch((err) => {
            errorState = true;
            console.log("POST CONNECT ERROR");
            console.log(err)
        })

        if(errorState) {
            alert("오류가 발생했습니다 😿");
            setLoginState(false);
            return;
        }

        //로그인 성공시 JWT토큰 발급
        if(status) {
            await axios.post(process.env.REACT_APP_SERVER_URL + "/login/jwt/token", {
                token: get.token
            }, {
                headers: {
                    Authorization: loginInfo.access_token
                }
            }).then((res) => {
                let access_token = res.data.data;
                let data = {
                    id: get.id,
                    token: get.token,
                    nickname: get.nickname,
                    access_token: access_token,
                    email: get.email
                }

                setLoginInfo(data);
                
                navigate("/board");
            }).catch((err) => {
                errorState = true;
                console.log("ROUTE ERROR");
                console.log(err);
            })

            if(errorState) {
                alert("오류가 발생했습니다 😿");
                setLoginState(false);
                return;
            }
        }
        //로그인 실패시
        else {  
            alert("아이디 또는 비밀번호를 확인해주세요.");
        }

        setLoginState(false);
    }

    return (
        <LoginDiv>
            <LoginForm>
            <LoginTitle>
                babble
            </LoginTitle>

            <LoginInputDiv onKeyUp={onKeyPress}>
               <ClassicInput text={"아이디 입력"} value={id} setValue={setId}></ClassicInput>

               <ClassicInput text={"비밀번호 입력"} value={pw} setValue={setPw} type="password">
               </ClassicInput>
               
            </LoginInputDiv>
           

            <LoginBtn onClick={loginCheck}>
                {
                    loginState ? (
                        <ScaleLoader height={"10px"} color="white"/>
                    ) : (  
                        <>
                            로 그 인
                        </>
                    )
                }
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
