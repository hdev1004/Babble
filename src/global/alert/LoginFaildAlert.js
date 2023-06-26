import React, { useEffect, useRef } from "react";
import { AlertDiv, AlertImg, AlertText, AlertTitle } from "./css/Alert";
import { motion } from "framer-motion";
import Close from "images/close.png";
import Browser from "images/browser.png";
import { Link } from "react-router-dom";

const App = (props) => {
    let searchRef = useRef(null);

    const closeBtn = () => {
        props.setShow(false)
    }

    useEffect(() => {
        function handleOutside(e) {
          // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
          if (searchRef.current && !searchRef.current.contains(e.target)) {
            props.setShow(false);
          }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => {
          document.removeEventListener("mousedown", handleOutside);
        };
      }, [searchRef]);

    return (
        <AlertDiv show={props.show}>
            <motion.div
                ref={searchRef}
                style={{
                    borderRadius: "15px",
                    width: "612px", 
                    height: "213px", 
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px #828282",
                    position: "relative"
                }} animate={{y: "103px", scale: props.show ? 1 : 0}}>

                <AlertTitle>
                    <img src={Close} onClick={closeBtn}></img>
                </AlertTitle>

                <AlertImg>
                    <img src={Browser}></img>
                </AlertImg>

                <AlertText>
                    <div style={{fontSize: "20px"}}>회원님의 정보와 일치하는 계정을 찾을 수 없습니다.</div>
                    <div style={{marginTop: "20px", color: "#828282"}}>아이디 또는 비밀번호를 다시 확인해주세요.</div>
                </AlertText>
            </motion.div>
        </AlertDiv>
    )
}

export default App;