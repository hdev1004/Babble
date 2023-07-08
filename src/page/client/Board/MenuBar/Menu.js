import React, { useEffect, useRef, useState } from "react";
import {
  MenuDiv,
  MenuForm,
  MenuSubForm,
  MenuTitle,
  MenuSubGroup,
  MenuCalendar,
  MenuRow,
} from "./css/Menu";
import Account from "images/account.png";
import Bell from "images/bell.png";
import Friends from "images/friends.png";
import PowerOff from "images/power-off.png";
import moment from "moment/moment";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "./Calendar";
import Alarm from "./Alarm";
import Friend from "./Friend";

import babble from "images/babble.png";
import { useNavigate } from "react-router-dom";


const App = ({ tab }) => {
  const alarmMenuRef = useRef(null);
  const friendMenuRef = useRef(null);

  const [isAlarm, setIsAlarm] = useState(false);
  const [isFriend, setIsFriend] = useState(false);

  const [nowData, setNowData] = useState(new Date());
  const navigate = useNavigate();

  const [friendReqState, setFriendReqState] = useState(false);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const images = [<>div</>];
  const [[page, direction], setPage] = useState([0, 0]);
  //makeCalendar(2023, 5);
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0,
      };
    },
  };

  useEffect(() => {
    console.log("NOW : ", friendReqState);
  }, [friendReqState])

  return (
    <MenuDiv>
      <Alarm
        isAlarm={isAlarm}
        setIsAlarm={setIsAlarm}
        alarmMenuRef={alarmMenuRef}
      ></Alarm>
      <Friend
        isFriend={isFriend}
        setIsFriend={setIsFriend}
        friendMenuRef={friendMenuRef}
        friendReqState={friendReqState}
        setFriendReqState={setFriendReqState}
      ></Friend>
      <MenuTitle>
        <img src={babble}></img>
      </MenuTitle>
      <MenuForm>
        <MenuSubForm>
          <MenuSubGroup>
            <MenuRow
              onClick={() => {
                navigate("/mypage");
              }}
            >
              <img src={Account}></img>
              <div>마이페이지</div>
            </MenuRow>
            <MenuRow
              onClick={() => {
                setIsAlarm(!isAlarm);
              }}
              ref={alarmMenuRef}
            >
              <img src={Bell}></img>
              <div>알림</div>
            </MenuRow>
            <MenuRow
              onClick={() => {
                setIsFriend(!isFriend);
              }}
              ref={friendMenuRef}
            >
              <img src={Friends}></img>
              <i className={friendReqState ? "alarm" : "alarm hidden"}></i>
              <div>친구</div>
            </MenuRow>
            <MenuRow>
              <img src={PowerOff}></img>
              <div>로그아웃</div>
            </MenuRow>
          </MenuSubGroup>

          <hr></hr>

          <MenuSubGroup>
            <MenuRow
              onClick={() => {
                navigate("/board/aa");
              }}
            >
              <img src={Account}></img>
              <div>모모 게시판</div>
            </MenuRow>

            <MenuRow
              onClick={() => {
                navigate("/board/bb");
              }}
            >
              <img src={Account}></img>
              <div>덕질 게시판</div>
            </MenuRow>

            <MenuRow
              onClick={() => {
                navigate("/board/cc");
              }}
            >
              <img src={Account}></img>
              <div>자유 게시판</div>
            </MenuRow>

            <MenuRow
              onClick={() => {
                navigate("/board/dd");
              }}
            >
              <img src={Account}></img>
              <div>문어 게시판</div>
            </MenuRow>

            <MenuRow
              onClick={() => {
                navigate("/board/ee");
              }}
            >
              <img src={Account}></img>
              <div>응애 게시판</div>
            </MenuRow>

            <MenuRow
              onClick={() => {
                navigate("/board/ff");
              }}
            >
              <img src={Account}></img>
              <div>개발 게시판</div>
            </MenuRow>
          </MenuSubGroup>
        </MenuSubForm>

        <div style={{ marginTop: "39px" }}></div>
      </MenuForm>

      <MenuCalendar>
        <div className="title">
          {nowData.getFullYear()}년 {nowData.getMonth() + 1}월
        </div>

        <div className="weeks">
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 500, damping: 50 },
              opacity: { duration: 0.1 },
            }}
            style={{
              position: "absolute",
              left: "0px",
              width: "100%",
              height: "calc(100% - 10px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
                //오른쪽
                let tempDate = nowData;
                tempDate.setMonth(tempDate.getMonth() + 1);
                setNowData(tempDate);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
                let tempDate = nowData;
                tempDate.setMonth(tempDate.getMonth() - 1);
                setNowData(tempDate);
                //왼쪽
              }
            }}
          >
            <Calendar data={nowData}></Calendar>
          </motion.div>
        </AnimatePresence>
      </MenuCalendar>
    </MenuDiv>
  );
};

export default App;
