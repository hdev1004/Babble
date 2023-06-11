import React, { useState } from 'react';
import { LoginDiv } from './css/login';
import { FormBox, IdFindsubmitBtn, IdFoundForm, IdFoundTitle, Idtab, TabSelect } from './css/foundId';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Userid = (props) => {
    const motionStyled = {zIndex: "0", position: "absolute", width: "276px", height: "56px", backgroundColor: "white", border: "1px solid #0085ff", borderBottom: "none"};
    const [tabBorder, setTabBorder] = useState(props.find);
    const navigate = useNavigate();

    return (
        <LoginDiv>
            <IdFoundForm tabBorder={tabBorder}>
                
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
        
                            <IdFindsubmitBtn>아이디 찾기</IdFindsubmitBtn>
                        </FormBox>
                    ) : (
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
        
                            <IdFindsubmitBtn>비밀번호 찾기</IdFindsubmitBtn>
                        </FormBox>
                    )
                }
               


            
            </IdFoundForm>
        </LoginDiv>

    );
};

export default Userid;