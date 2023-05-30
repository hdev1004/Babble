import React, { useState } from 'react';
import { LoginDiv } from './css/login';
import { IdFoundForm, IdFoundTitle, Idtab, TabSelect } from './css/foundId';

const Userid = () => {
    const [tabBorder, setTabBorder] = useState(0);
    console.log(tabBorder)
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
            
            </IdFoundForm>
        </LoginDiv>

    );
};

export default Userid;