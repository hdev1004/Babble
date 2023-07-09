import React, { useEffect, useState } from "react";
import Menu from "page/client/Board/MenuBar/Menu";
import { BoardDiv } from "./css/ClientMainRouter";

import MainBoard from "./MainBoard";
import {  Route, Routes, useNavigate } from "react-router-dom";
import BestPost from "./BestPost";
import { throttle } from "lodash";
import { loginInfoState } from "state/login/recoil";
import { useRecoilState } from "recoil";
import { PulseLoader } from "react-spinners";
import * as jwt from "./Function/jwt";
import {motion} from "framer-motion";
import { getBoardKindList } from "./Function/board_utils";

//firebase
const App = () => {
    const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
    const naviate = useNavigate();
    const [tab, setTab] = useState(null);

    useEffect(() => {
        jwt.check_token(loginInfo, setLoginInfo, naviate); //토큰 체크
        getBoardKindList(setTab);
    }, [])

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <BoardDiv className="body">  
                <Menu tab={tab}></Menu>
                {
                    tab === null || tab.length === 0 ? (
                        <></>
                    ) : (
                        <Routes>
                            <Route path="/" element = {<MainBoard board={tab[0]}></MainBoard>}></Route>
                            {
                                tab.map((item) => (
                                    <Route path={item.name} element={<MainBoard board={item}/>} />
                                ))
                            }
                            
                        </Routes>
                    )
                }
                <BestPost></BestPost>
                
                
            </BoardDiv>
        </motion.div>
    )
   
}

export default App;