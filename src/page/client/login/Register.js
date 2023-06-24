import React, { useState } from "react";
import { RegisterDiv, RegisterForm, RegisterTitle, RegisterBody, RegisterRow, RegisterTableTitle, RegisterInput, RegisterNoti, RegisterLine, RegisterButton, RegisterSubmit, RegisterEmail, RegisterNotiSuc} from "./css/register";
import { useNavigate } from "react-router-dom";
import RegisterAlert from "global/alert/RegisterAlert";
import * as reg from "./Function/reg";
import * as encryption from "./Function/encryption";
import { async } from "q";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

const App = () => {
    let navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [rePw, setRePw] = useState('');
    const [email, setEmail] = useState({
        source: "",
        destination: "naver.com",
        direct: ""
    });
    const [nickName, setNickName] = useState("");
    const [idDup, setIdDup] = useState(false); //아이디 중복 확인
    const [nameDup, setNameDup] = useState(false); //닉네임 중복 확인
    const [nameChange, setNameChange] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [registerState, setReigsterState] = useState(false);

    const goHome = () => {
        navigate("/");
    }

    const idChange = (data) => {
        setId(data);
        axios.get(process.env.REACT_APP_SERVER_URL + "/register/id/" + data).then((res) => {
            setIdDup(res.data.data);
        }).catch((err) => {
            console.log(err);
            setIdDup(true);
        })
    }

    const nickDupCheck = () => {    
        setNameChange(false);
        axios.get(process.env.REACT_APP_SERVER_URL + "/register/nickname/" + nickName).then((res) => {
            setNameDup(res.data.data);
        }).catch((err) => {
            console.log(err);
            setIdDup(true);
        })
    }

    const register = async () => {
        let mail = email.destination === "input" ? email.source + "@" + email.direct : email.source + "@" + email.destination;

        if(reg.isId(id) === false || idDup) {
            alert("아이디를 확인해주세요.");
            return;
        } else if(reg.isSecPassword(pw) === false) {
            alert("비밀번호를 확인해주세요.");
            return;
        } else if(pw !== rePw) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        } else if(reg.isEmail(mail) === false) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        } else if(nameChange) {
            alert("닉네임 중복확인이 필요합니다.");
            return;
        } else if(reg.isNickName(nickName) === false || nameDup) {
            alert("닉네임을 확인해주세요.");
            return;
        }
        setReigsterState(true);

        let token = await encryption.createToken();
        let salt = await encryption.createSalt();
        let pw_enc = await encryption.encryptPassword(pw, salt);

        let data = {
            token: token,
            id: id,
            pw: pw_enc.encryptedPassword,
            email: mail,
            nickName: nickName,
            salt: salt
        }

        await axios.post(process.env.REACT_APP_SERVER_URL + "/register", data).then((res) => {
            let get = res.data;
            if(get.message !== "200 OK") {
                console.log(get);
                if(get.data === 1062) {
                    alert("아이디가 중복되었습니다.");
                    return;
                } else {
                    alert("회원가입 중 오류가 발생했습니다.");
                    return;
                }
            }
            setIsRegister(true);
            console.log(res);
        }).catch((err) => {
            alert("회원가입 중 오류가 발생했습니다.");
            console.log(err);
        });
        
        setReigsterState(false);
    }

    return (
        <RegisterDiv>
            <RegisterAlert show={isRegister} setShow={setIsRegister}></RegisterAlert>
            <RegisterForm>
                <RegisterTitle onClick={goHome}>
                    babble
                </RegisterTitle>

                <RegisterBody>
                    <RegisterRow>
                        <RegisterTableTitle>아이디</RegisterTableTitle>
                        <RegisterInput placeholder="아이디를 입력해 주세요." value={id} onChange={(data) => {idChange(data.target.value)}}></RegisterInput>
                        {
                            reg.isId(id) ? (
                                idDup ? (
                                    <RegisterNoti>
                                        아이디가 중복되었습니다.
                                    </RegisterNoti>
                                ) : (
                                    <RegisterNotiSuc>
                                        아이디를 사용할 수 있습니다.
                                    </RegisterNotiSuc>
                                )
                            ) : (
                                <RegisterNoti>6자~16자의 영문 또는 숫자의 조합</RegisterNoti>
                            )
                        }
                        
                    </RegisterRow>


                    <div style={{marginTop: "42px"}}></div>


                    <RegisterRow>
                        <RegisterTableTitle>비밀번호</RegisterTableTitle>
                        <RegisterInput placeholder="비밀번호를 입력해 주세요." type="password" value={pw} onChange={(data) => {setPw(data.target.value)}}></RegisterInput>
                        {
                            reg.isSecPassword(pw) ? (
                                <RegisterNotiSuc>
                                    비밀번호를 사용할 수 있습니다.
                                </RegisterNotiSuc>
                            ) : (
                                <RegisterNoti>
                                    8자~15자의 대/소문자, 숫자 및 특수문자 조합으로만 가능합니다.
                                </RegisterNoti>
                            )
                        }
                    </RegisterRow>


                    <div style={{marginTop: "42px"}}></div>


                    <RegisterRow>
                        <RegisterTableTitle>비밀번호 확인</RegisterTableTitle>
                        <RegisterInput placeholder="비밀번호를 입력해 주세요." type="password" value={rePw} onChange={(data) => {setRePw(data.target.value)}}></RegisterInput>
                        {
                            pw === rePw && reg.isSecPassword(pw) ? (
                                <RegisterNotiSuc>비밀번호가 일치합니다.</RegisterNotiSuc>
                            ) : (
                                <RegisterNoti>비밀번호가 일치하지 않습니다.</RegisterNoti>
                            )
                        }
                    </RegisterRow>

                    <div style={{marginTop: "42px"}}></div>


                    <RegisterRow>
                        <RegisterTableTitle>이메일</RegisterTableTitle>
                        <RegisterEmail>
                            <input className="email_id" value={email.source} onChange={(data) => {
                                setEmail({
                                    source: data.target.value,
                                    destination: email.destination,
                                    direct: email.direct
                                })
                            }}></input> 
                            <span> @ </span>
                            <select value={email.destination} onChange={(data) => { 
                                setEmail({
                                    source: email.source,
                                    destination: data.target.value,
                                    direct: ""
                                })
                            }}>
                                <option value={"naver.com"}>naver.com</option>
                                <option value={"daum.com"}>daum.com</option>
                                <option value={"kakao.com"}>kakao.com</option>
                                <option value={"gmail.com"}>gmail.com</option>
                                <option value={"input"}>직접입력</option>
                            </select>
                            <input className="email_tail" value={email.direct} disabled={email.destination === "input" ? false : true} onChange={(data) => {
                                setEmail({
                                    source: email.source,
                                    destination: email.destination,
                                    direct: data.target.value
                                })
                            }}></input> 
                        </RegisterEmail>
                        
                    </RegisterRow>

                    
                    <div style={{marginTop: "42px"}}></div>

                    <RegisterLine></RegisterLine>

                    <div style={{marginTop: "42px"}}></div>

                    <RegisterRow>
                        <RegisterTableTitle>닉네임</RegisterTableTitle>
                        <RegisterInput placeholder="닉네임을 입력해 주세요." value={nickName} onChange={(data) => {setNickName(data.target.value); setNameChange(true)}}></RegisterInput>
                        <RegisterButton onClick={nickDupCheck}>중복확인</RegisterButton>
                        
                        {
                            reg.isNickName(nickName) ? (
                                nameChange ? (
                                    <RegisterNoti>닉네임 중복확인이 필요합니다.</RegisterNoti>
                                ) : nameDup ? (
                                    <RegisterNoti>닉네임이 중복되었습니다.</RegisterNoti>
                                ) : (
                                    <RegisterNotiSuc>닉네임을 사용할 수 있습니다.</RegisterNotiSuc>
                                )
                            ) : (
                                <RegisterNoti>사용할 닉네임은 한글과 숫자를 포함하여 5-10자, 영어는 5-16자까지 가능하며,
                                ‘babble’, ‘관리자’란 단어는 관리자 계정에 포함되므로 사용할 수 없습니다.</RegisterNoti>
                            )
                        }
                       
                    </RegisterRow>



                    <div style={{marginTop: "77px"}}></div>

                    <RegisterSubmit onClick={register}> 
                        {
                            registerState ? (
                                <ScaleLoader height={"10px"} color="white">

                                </ScaleLoader>
                            ) : (
                                <>
                                    회원가입
                                </>
                            )
                        }
                    </RegisterSubmit>
                </RegisterBody>
            </RegisterForm>
        </RegisterDiv>
    )
}

export default App;