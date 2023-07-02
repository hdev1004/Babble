// eslint-disable-next-line jsx-a11y/alt-text
import React, { useEffect, useRef, useState } from "react";
import {
  FriendDiv,
  AlarmForm,
  FriendSubForm,
  FriendTitle,
  FriendList,
  FriendRow,
  AddList,
  AddRow,
  AddInfo,
  AddBtns,
  FriendSearch,
  Lable,
  FriendSearchList,
} from "./css/Friend";
import { motion } from "framer-motion";
import account from "images/account.png";
import search from "images/search_gray.png";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { PulseLoader } from "react-spinners";
import { getFriendRequest, getFrinedList, getUserList, transDate } from "./function/utils";

const App = ({ isFriend, setIsFriend, friendMenuRef }) => {
  const [tab, setTab] = useState("friend"); //friend : 친구목록, add : 친구추가, search : 검색하기
  const tabRef = useRef(null);
  const [friend, setFrind] = useState(null);
  const [userList, setUserList] = useState([]);
  const [requestList, setRequestList] = useState(null);

  const loginInfo = useRecoilValue(loginInfoState);

  const keyPress = (e) => {
    if(e.key === "Enter") {
      let backup = userList;
      setUserList(null);
      let name = e.target.value;
      if(name === '') {
        alert("닉네임을 입력해주세요.");
        setUserList(backup);
        return;
      }
      getUserList(setUserList, name, loginInfo.token);  
    }
  }

  const accpet = (token) => {
    console.log(token);
  }

  const refuse = (token) => {

  }

  const friendRequest = (token) => {
    console.log(token);
  }

  useEffect(() => {
    getFrinedList(setFrind, loginInfo.token);
    getFriendRequest(setRequestList, loginInfo.token);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      const isInside = tabRef?.current?.contains(e.target);
      const menuInside = friendMenuRef?.current?.contains(e.target);
      if (isFriend && !isInside && !menuInside) {
        setIsFriend(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isFriend]);

  return (
    <motion.div
      style={{
        boxShadow: "0px 0px 50px lightgray",
        top: "250px",
        left: "282px",
        position: "absolute",
        width: "380px",
        height: "500px",
        backgroundColor: "#F5F6F8",
        borderRadius: "14px",
        overflow: "hidden",
      }}
      animate={{
        scale: isFriend ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      initial={{
        scale: 0,
      }}
      ref={tabRef}
    >
      <motion.div style={{ position: "relative" }}>
        <FriendDiv>
          <FriendTitle tab={tab}>
            <div
              onClick={() => {
                setTab("friend");
              }}
              style={{ color: tab === "friend" ? "#000" : "#828282" }}
            >
              친구목록
            </div>
            <div
              onClick={() => {
                setTab("add");
              }}
              style={{ color: tab === "add" ? "#000" : "#828282" }}
            >
              친구추가
            </div>
            <div
              onClick={() => {
                setTab("search");
              }}
              style={{ color: tab === "search" ? "#000" : "#828282" }}
            >
              검색하기
            </div>
            <i
              className="bar"
              style={{
                left:
                  tab === "friend" ? "18px" : tab === "add" ? "146px" : "274px",
              }}
            ></i>
          </FriendTitle>

          <motion.div
            style={{ position: "relative" }}
            animate={{ x: tab === "friend" ? 0 : tab === "add" ? -380 : -760 }}
          >
            <FriendSubForm className="left">
              {
                friend === null ? (
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                    <PulseLoader color="#0085ff" speedMultiplier={0.85} size={10}/>
                  </div>
                ) : (
                  <FriendList>
                    {
                      friend.map((item) => (
                        <FriendRow>
                          <img src={account} />
                          <p>{item.nickname}</p>
                          <button>친구끊기</button>
                        </FriendRow>
                      ))
                    }
                   
                  </FriendList>
                  
                )
              }
             
            </FriendSubForm>
            <FriendSubForm className="mid">
              <AddList>
                {
                  requestList === null ? (
                    <div className="load">
                      <PulseLoader color="#0085ff" speedMultiplier={0.85} size={10}/>
                    </div>
                  ) : requestList.map((item, index) => (
                  <AddRow style={index === 0 ? {scale: 1, height: 0, boxShadow: "none", overflow: "hidden", margin: 0} : {}}>
                    <AddInfo>
                      <img src={account} />
                      <div>{item.nickname}</div>
                      <div className="date">{transDate(item.update_date)}</div>
                    </AddInfo>
                    <AddBtns>
                      <button className="accept" onClick={() => {accpet(item.friend_token)}}>수락</button>
                      <button className="refuse" onClick={() => {refuse(item.friend_token)}}>거절</button>
                    </AddBtns>
                  </AddRow>
                  ))
                }
                

              </AddList>
            </FriendSubForm>
            <FriendSubForm className="right">
              <FriendSearch>
                <Lable>
                  <input
                    onKeyUp={keyPress}
                    placeholder="사용자의 닉네임을 검색해 주세요."
                  ></input>
                  <button>
                    <img src={search} />
                  </button>
                </Lable>
              </FriendSearch>

              <FriendSearchList>
                {
                  userList === null ? (
                    <div className="load">
                      <PulseLoader color="#0085ff" speedMultiplier={0.85} size={10}/>
                    </div>
                  ) : userList.length === 0 ? (
                    <div className="load">
                      검색결과가 없습니다.
                    </div>
                  ) : userList.map((item, index) => (
                    <FriendRow>
                        <img src={account} />
                        <p>{item.nickname}</p>
                        <button onClick={() => {friendRequest(item.token)}}>친구신청</button>
                    </FriendRow>
                    
                  ) )
                }
              </FriendSearchList>
            </FriendSubForm>
          </motion.div>
        </FriendDiv>
      </motion.div>
    </motion.div>
  );
};

export default App;
