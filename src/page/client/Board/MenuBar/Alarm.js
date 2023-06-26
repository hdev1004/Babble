import React, { useEffect, useRef, useState } from "react";
import { AlarmDiv, AlarmForm, AlarmSubForm, AlarmTitle, ChatDiv } from "./css/Alarm";
import { motion } from "framer-motion";

const App = ({isAlarm, setIsAlarm ,alarmMenuRef}) => {
    const [tab, setTab] = useState("alarm"); //alarm : 알림, chat : 채팅
    const [innerChat, setInnserChat] = useState(false); 
    const tabRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
          const isInside = tabRef?.current?.contains(e.target);
          const menuInside = alarmMenuRef?.current?.contains(e.target);
          if (isAlarm && !isInside && !menuInside) {
            setIsAlarm(false);
          }
        }
    
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [isAlarm]);

    return (
        <motion.div style={{
            boxShadow: "0px 0px 50px lightgray",
            top: "200px",
            left: "282px",
            position: "absolute",
            width: "380px",
            height: "500px",
            backgroundColor: "#F5F6F8",
            borderRadius: "14px",
            overflow: "hidden"
            }} animate={{
                scale: isAlarm ? 1 : 0
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              initial= {{
                scale: 0
              }}
              ref={tabRef}>
            
            <motion.div style={{position: "relative"}} animate={{x: innerChat ? -380 : 0}}>
                <AlarmDiv>
                    <AlarmTitle tab={tab}>
                        <div onClick={() => {setTab("alarm")}} style={{color: tab === "alarm" ? "#000" : "#828282"}}>알림</div>
                        <div onClick={() => {setTab("chat")}} style={{color: tab === "chat" ? "#000" : "#828282"}}>채팅</div>
                        <i className="bar" style={{left: tab === "alarm" ? "45px" : "235px"}}></i>
                    </AlarmTitle>

                    <motion.div style={{position: "relative"}} animate={{x: tab === "alarm" ? 0 : -380}}>
                        <AlarmSubForm className="left">
                            aa
                        </AlarmSubForm>
                        <AlarmSubForm className="right">
                            <div onDoubleClick={() => {setInnserChat(true)}}>bb</div>
                        </AlarmSubForm>
                    </motion.div>
                </AlarmDiv>

                <ChatDiv>
                    aaa
                </ChatDiv>
            </motion.div>
            
        </motion.div>
    )
}

export default App;