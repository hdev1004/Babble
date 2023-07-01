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
} from "./css/Friend";
import { motion } from "framer-motion";
import account from "images/account.png";
import search from "images/search_gray.png";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { PulseLoader } from "react-spinners";

const App = ({ isFriend, setIsFriend, friendMenuRef }) => {
  const [tab, setTab] = useState("friend"); //friend : 친구목록, add : 친구추가, search : 검색하기
  const tabRef = useRef(null);
  const [friend, setFrind] = useState(null);
  const [userList, setUserList] = useState([]);

  const loginInfo = useRecoilValue(loginInfoState);

  const keyPress = (e) => {
    if(e.key === "Enter") {
      setUserList(null);
      let name = e.target.value;
      getUserList(name);  
    }
  }

  const getUserList = (name) => {
    axios.get(process.env.REACT_APP_TEST_URL + `/user/list/${name}/${loginInfo.token}`).then((res) => {
      let data = res.data.data;
      setUserList(data);
    }).catch((err) => {
      alert("오류가 발생했습니다.");
    })
  }

  const getFrinedList = () => {
    axios.get(process.env.REACT_APP_TEST_URL + "/friend/" + loginInfo.token).then((res) => {
      setFrind(res.data.data);
    }).catch((err) => {
      alert("오류가 발생했습니다.");
    })
  }

  useEffect(() => {
    getFrinedList();
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
                <AddRow>
                  <AddInfo>
                    <img src={account} />
                    <div>티라노TV</div>
                    <div>5.21 17:33</div>
                  </AddInfo>
                  <AddBtns>
                    <button>수락</button>
                    <button>거절</button>
                  </AddBtns>
                </AddRow>

                <AddRow>
                  <AddInfo>
                    <img src={account} />
                    <div>동인천크로스오버</div>
                    <div>5.21 17:33</div>
                  </AddInfo>
                  <AddBtns>
                    <button>수락</button>
                    <button>거절</button>
                  </AddBtns>
                </AddRow>
                <AddRow>
                  <AddInfo>
                    <img src={account} />
                    <div>남고상언</div>
                    <div>5.21 17:33</div>
                  </AddInfo>
                  <AddBtns>
                    <button>수락</button>
                    <button>거절</button>
                  </AddBtns>
                </AddRow>
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

              <div> {/* 테스트 */}
                {
                  userList === null ? (
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                      <PulseLoader color="#0085ff" speedMultiplier={0.85} size={10}/>
                    </div>
                  ) : userList.length === 0 ? (
                    <div>
                      검색결과가 없습니다.
                    </div>
                  ) : userList.map((item, index) => (
                    <div>
                      {item.nickname}
                    </div>
                  ))
                }
              </div>
            </FriendSubForm>
          </motion.div>
        </FriendDiv>
      </motion.div>
    </motion.div>
  );
};

export default App;
