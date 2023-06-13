import React, { useState } from 'react';
import { LoginDiv } from './css/login';
import { FormBox, IdFindsubmitBtn, IdFoundForm, IdFoundTitle, Idtab, TabSelect, FindFormBox, FindIdTextBox, EnabledBtn, DisabledBtn, BtnGroup, TextGroup } from './css/foundId';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Userid = (props) => {
    const motionStyled = {zIndex: "0", position: "absolute", width: "276px", height: "56px", backgroundColor: "white", border: "1px solid #0085ff", borderBottom: "none"};
    const [tabBorder, setTabBorder] = useState(props.find);
    const [idIsFind, setIdIsFind] = useState(false);
    const [pwIsFind, setPwIsFind] = useState(false);
    const navigate = useNavigate();


    const checkFindId = () => {
        setIdIsFind(true);    
    }

    const checkFindPw = () => {
        setPwIsFind(true);
    }

    const FindIdlogin = () => {
        navigate("/");
    }

    const FindId2FindPw = () => {
        setTabBorder("pw");
    }

    const ReplacePw = () => {
        alert("비번 재설정")
    }

    return (
        <LoginDiv>
            <IdFoundForm tabBorder={tabBorder} idIsFind={idIsFind} pwIsFind={pwIsFind}>
                
                <IdFoundTitle>
                    <span onClick={() => {navigate("/")}} className='title'>babble</span>
                </IdFoundTitle>

                <TabSelect >
                    <Idtab onClick={()=>{setTabBorder("id")}} className={tabBorder === "id" ? "tab_border" : "none_border"}>
                        <span>아이디 찾기</span>
                    </Idtab>
                    <Idtab onClick={()=>{setTabBorder("pw")}} className={tabBorder === "pw" ? "tab_border" : "none_border"}>
                        <span>비밀번호 찾기</span>
                    </Idtab>

                    <motion.div
                        style={motionStyled}
                        animate={{ x: tabBorder === "id" ? 0 : 276}}
                    >
                    </motion.div>
                
                </TabSelect>

                {
                    tabBorder === "id" ? (
                        !idIsFind ? (
                            <FormBox>
                                <div>
                                    <label for = "email"><span style={{color:"red"}}>*</span>이메일</label>
                                    <input type = "text" id = "email" />
                                    <button>인증번호 발송</button>
                                </div>
            
                                <div>
                                    <label for = "email"><span style={{color:"red"}}>*</span>인증번호</label>
                                    <input type = "password" id = "email" />
                                    <button>확인</button>
                                </div>
            
                                <IdFindsubmitBtn onClick={checkFindId}>아이디 찾기</IdFindsubmitBtn>
                            </FormBox>
                        ) : (
                            <FindFormBox>
                                <FindIdTextBox>
                                    <span>회원님의 아이디는 <span style={{fontWeight:"bold", color:"red"}}>no4.j**</span> (으)로 등록되어 있습니다.</span><br/>
                                    <span>가입일자는 <span style={{fontWeight:"bold", color:"red"}}>2023-00-00</span> 입니다.</span>
                                </FindIdTextBox>

                                <br/><br/>
                                <hr style={{opacity: 0.5}}></hr>
                                <br/><br/>

                                <div style={{textAlign: "center", fontSize: "15px", color: "#828282"}}>
                                    개인정보 도용에 대한 피해방지를 위하여 첫 다섯글자만 확인 가능합니다.
                                </div>

                                <BtnGroup>
                                    <EnabledBtn onClick={FindIdlogin}>로그인</EnabledBtn>
                                    <div style={{width: "25px"}}></div>
                                    <DisabledBtn onClick={FindId2FindPw}>비밀번호 찾기</DisabledBtn>
                                </BtnGroup>
                            </FindFormBox>
                        )
                       
                    ) : (
                        !pwIsFind ? (
                            <FormBox>
                                <div>
                                    <label for = "email"><span style={{color:"red"}}>*</span>아이디</label>
                                    <input className='long' type = "password" id = "email" />
                                </div>

                                <div>
                                    <label for = "email"><span style={{color:"red"}}>*</span>이메일</label>
                                    <input type = "text" id = "email" />
                                    <button>인증번호 발송</button>
                                </div>
            
                                <div>
                                    <label for = "email"><span style={{color:"red"}}>*</span>인증번호</label>
                                    <input type = "password" id = "email" />
                                    <button>확인</button>
                                </div>
            
                                <IdFindsubmitBtn onClick={checkFindPw}>비밀번호 찾기</IdFindsubmitBtn>
                            </FormBox>
                        ) : (
                            <FindFormBox>
                                <div style={{textAlign: "center"}}>
                                    <span style={{fontSize: "20px"}}><b>babble</b>에서 사용할 새로운 비밀번호를 입력해 주세요!</span><br/><br/>
                                    <span style={{fontSize: "15px", color: "#828282",}}>새로운 비밀번호는 기존의 비밀번호와 동일하게 설정할 수 없습니다.</span>
                                </div>

                                <br/><br/>

                                <TextGroup>
                                    <div>새 비밀번호</div>
                                    <input placeholder='비밀번호를 입력해 주세요.'></input>
                                    <span>8자~15자의 대/소문자, 숫자 및 특수문자 조합으로만 가능합니다.</span>
                                </TextGroup>

                                <TextGroup>
                                    <div>새 비밀번호 확인</div>
                                    <input placeholder='비밀번호를 입력해 주세요.'></input>
                                    <span>비밀번호가 일치하지 않습니다.</span>
                                </TextGroup>

                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                                    <EnabledBtn onClick={ReplacePw} style={{width: "346px"}}>
                                        비밀번호 재설정
                                    </EnabledBtn>
                                </div>

                            </FindFormBox>
                        )
                        
                    )
                }
               


            
            </IdFoundForm>
        </LoginDiv>

    );
};

export default Userid;