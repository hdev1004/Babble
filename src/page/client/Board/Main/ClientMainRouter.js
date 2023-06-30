import React, { useEffect, useState } from "react";
import Menu from "page/client/Board/MenuBar/Menu";
import { BoardDiv } from "./css/ClientMainRouter";

import MainBoard from "./MainBoard";
import {  Route, Routes, useNavigate } from "react-router-dom";
import BestPost from "./BestPost";
import { throttle } from "lodash";
import { loginInfoState } from "state/login/recoil";
import { useRecoilState } from "recoil";
import { ScaleLoader } from "react-spinners";
import * as jwt from "./Function/jwt";
import {motion} from "framer-motion";

//firebase
import { db } from "noSQL/firebase";
import { collection, addDoc,  getDocs } from "firebase/firestore"; 

const App = () => {
    const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
    const naviate = useNavigate();

    const firebaseRead = async () => {
        const querySnapshot = await getDocs(collection(db, "Chat"));

        querySnapshot.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data())
        });
    }

    useEffect(() => {
        firebaseRead();
    })

    jwt.check_token(loginInfo, setLoginInfo, naviate); //토큰 체크

    let tab = [{
        title: "모모 게시판",
        link: "/aa"
    }, {
        title: "덕질 게시판",
        link: "/bb"
    }, {
        title: "자유 게시판",
        link: "/cc"
    }, {
        title: "문어 게시판",
        link: "/dd"
    }, {
        title: "우웩 게시판",
        link: "/ee"
    }, {
        title: "개발 게시판",
        link: "/ff"
    }]


    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <BoardDiv className="body">  
                <Menu tab={tab}></Menu>

                <Routes>
                    <Route path="/" element = {<MainBoard type={tab[0].link}></MainBoard>}></Route>
                    {
                        tab.map((item) => (
                            <Route path={item.link} element={<MainBoard type={item.link}/>} />
                        ))
                    }
                    
                </Routes>
                
                
                <BestPost></BestPost>
                
                
            </BoardDiv>
        </motion.div>
    )
   
}

export default App;