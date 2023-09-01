import React, { useEffect, useRef, useState } from "react";
import { AlarmDiv, AlarmForm, AlarmSubForm, AlarmTitle, ChatDiv, AlarmList, AlarmRow, AlarmRow2, ChattingList, ChattingOne, ChattingTwo, ChattingThree, Chat_today } from "./css/Alarm";
import { motion } from "framer-motion";
import chatprofile from "images/chatprofile.jpg";
import left from "images/left.png";
import send from "images/paper-plane.png";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "noSQL/firebase"; 
import { useRecoilValue } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { useNavigate } from "react-router-dom";

const App = ({isAlarm, setIsAlarm ,alarmMenuRef, alarmState, setAlaramState}) => {
    const [tab, setTab] = useState("alarm"); //alarm : 알림, chat : 채팅
    const [innerChat, setInnserChat] = useState(false); 
    const tabRef = useRef(null);
    const loginInfo = useRecoilValue(loginInfoState);
    const [alarmList, setAlarmList] = useState(null);
    const naviate = useNavigate();

    const transDate = (data) => {
      let date = new Date(data);
      let year = date.getFullYear().toString();
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2, "0");
  
      let hour = date.getHours().toString().padStart(2, "0");
      let min = date.getMinutes().toString().padStart(2, "0");
      return year + "." + month + "." + day + " " + hour + ":" + min;
  }
  
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

    useEffect(() => {
        if(loginInfo.token === "") return;
        const unsub = onSnapshot(doc(db, "Alarm", loginInfo.token), (doc) => {
          let data = doc.data()?.data;
    
          if(data === undefined || data.length === 0) {
            //데이터가 없을 때
            setAlarmList([]);
          } else {
            //데이터가 있을 때
            const sortedDate = data.sort((a, b) => new Date(b.date.toDate()) - new Date(a.date.toDate()))
            let isReadArray = [];
            console.log(data);
            setAlarmList(sortedDate);
            
            isReadArray = data.filter(prev => prev.isRead === false);
            if(isReadArray.length > 0) {
              setAlaramState(true)
            }
          }
        });
    }, [])

    const moveController = (type, category, move) => {
      if(type === "board") {
        naviate(`/board/${category}/${move}`);
      }
      
    }

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
                        <div className="alarm" onClick={() => {setTab("alarm")}} style={{color: tab === "alarm" ? "#000" : "#828282"}}>
                          알림
                          </div>
                        <div className="chat" onClick={() => {setTab("chat")}} style={{color: tab === "chat" ? "#000" : "#828282"}}>채팅</div>
                        <i className="bar" style={{left: tab === "alarm" ? "45px" : "235px"}}></i>
                    </AlarmTitle>

                    <motion.div style={{position: "relative"}} animate={{x: tab === "alarm" ? 0 : -380}}>
                        <AlarmSubForm className="left">
                          {
                             alarmList?.map((item) => (
                              <AlarmList onClick={() => {moveController(item.type, item.category, item.move)}}>
                                <AlarmRow>
                                  <div className="Alarm_kind">{item.category}</div>
                                  <div className="Alarm_time">{transDate(item.date.toDate())}</div>
                                </AlarmRow>
                                <AlarmRow2>
                                  <div className="Alarm_content">{item.comment}</div>
                                </AlarmRow2>
                              </AlarmList>
                             ))
                          }
                        </AlarmSubForm>
                        
                        <AlarmSubForm className="right">
                            <div onDoubleClick={() => {setInnserChat(true)}}>
                              <ChattingList>
                                <ChattingOne>
                                  <img src={chatprofile} />
                                </ChattingOne>
                                <ChattingTwo>
                                  <div className="Chat_name">하얀곰</div>
                                  <div className="Chat_content">사우지마세요</div>
                                </ChattingTwo>
                                <ChattingThree>
                                  <div className="Chat_lasttime">오전 11:13</div>
                                  <div className="Chat_message">2</div>
                                </ChattingThree>
                              </ChattingList>
                            </div>
                        </AlarmSubForm>
                    </motion.div>
                </AlarmDiv>

                <ChatDiv>
                    <div className="title">
                      <div className="Chat_back" onClick={() => {setInnserChat(false)}}>
                        <img src={left} />
                      </div>

                      <div className="Chat_in_name">하얀곰</div>
                    </div>
                    
                    <div className="Chat_today">2023년 7월 14일 금요일</div>

                    <div className="Chat_youone">
                      <img className="cute_img" src={chatprofile} />
                      <div className="Chat_one">누가 싸운다고요?</div>
                      <div className="Chat_time_one">오후 11:11</div>
                    </div>

                    <div className="Chat_youtwo">
                      <div className="Chat_two">사우지마세요</div>
                      <div className="Chat_time_two">오후 11:13</div>
                    </div>

                    <div className="Chat_send">
                      <div className="Chat_message">메세지 입력</div>
                      <img className="Chat_sendimg" src={send} />
                    </div>
                </ChatDiv>
                
            </motion.div>
            
        </motion.div>
    )
}

export default App;