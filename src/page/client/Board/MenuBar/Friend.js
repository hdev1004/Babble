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

const App = ({ isFriend, setIsFriend, friendMenuRef }) => {
  const [tab, setTab] = useState("friend"); //friend : 친구목록, add : 친구추가, search : 검색하기
  const tabRef = useRef(null);

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
              <FriendList>
                <FriendRow>
                  <img src={account} />
                  <p>크롬이만든쿠키</p>
                  <button>친구끊기</button>
                </FriendRow>
                <FriendRow>
                  <img src={account} />
                  <p>쩝쩝박사</p>
                  <button>친구끊기</button>
                </FriendRow>
                <FriendRow>
                  <img src={account} />
                  <p>충격영중너구리</p>
                  <button>친구끊기</button>
                </FriendRow>
                <FriendRow>
                  <img src={account} />
                  <p>머닝러신</p>
                  <button>친구끊기</button>
                </FriendRow>
              </FriendList>
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
                    type=""
                    placeholder="   사용자의 닉네임을 검색해 주세요."
                  ></input>
                  <button>
                    <img src={search} />
                  </button>
                </Lable>
              </FriendSearch>
            </FriendSubForm>
          </motion.div>
        </FriendDiv>
      </motion.div>
    </motion.div>
  );
};

export default App;
