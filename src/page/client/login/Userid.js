import React, { useState } from 'react';
import { LoginDiv } from './css/login';
import { FormBox, IdFindsubmitBtn, IdFoundForm, IdFoundTitle, Idtab, TabSelect } from './css/foundId';

const Userid = () => {
    const [tabBorder, setTabBorder] = useState(0);
    return (
        <LoginDiv>
            <IdFoundForm>
                
                <IdFoundTitle>
                    <span className='title'>babble</span>
                </IdFoundTitle>

                <TabSelect >
                    <Idtab onClick={()=>{setTabBorder(0)}} className={tabBorder === 0 ? "tab_border" : "none_border"}>
                        <span>아이디 찾기</span>
                    </Idtab>
                    <Idtab onClick={()=>{setTabBorder(1)}} className={tabBorder === 1 ? "tab_border" : "none_border"}>
                        <span>비밀번호 찾기</span>
                    </Idtab>
                </TabSelect>

                <FormBox>
                    <div>
                        <label for = "email"><span style={{color:"red"}}>*</span> 이메일</label>
                        <input type = "text" id = "email" />
                        <button>인증번호 발송</button>
                    </div>

                    <div>
                        <label for = "email"><span style={{color:"red"}}>*</span>인증번호</label>
                        <input type = "text" id = "email" />
                        <button>확인</button>
                    </div>

                    <IdFindsubmitBtn>아이디 찾기</IdFindsubmitBtn>
                </FormBox>


            
            </IdFoundForm>
        </LoginDiv>

    );
};

export default Userid;