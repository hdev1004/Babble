import React, { useState } from "react";
import { MenuDiv, MenuForm, MenuSubForm, MenuTitle, MenuSubGroup, MenuCalendar, MenuRow } from "./css/Menu";
import Account from "images/account.png";
import Bell from "images/bell.png";
import Friends from "images/friends.png";
import PowerOff from "images/power-off.png";
import moment from "moment/moment";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "./Calendar";

const makeCalendar = (year, month) => {
    let beforeDate = new Date(year, month, 0);
    let currentDate = new Date(year, month, 1);
    let afterDate = new Date(year, month + 1, 0);
    
    let startDate = currentDate.getDay();
    let dateArr = []; 
    
    let firstWeek = [];
    let midWeek = [];
    let lastWeek = [];

    let day = 1;

    for(let i = 0; i < startDate; i ++) {
        firstWeek.push(beforeDate.getDate() - startDate + i + 1);
    }
    
    for(let i = startDate; i < 7; i ++) {
        firstWeek.push(day);
        day += 1;
    }
    dateArr.push(firstWeek);
    
    let trigger = false;
    for(let i = firstWeek[6] + 1; i <= afterDate.getDate(); i ++) {
        trigger = false;
        midWeek.push(i);

        if(midWeek.length === 7) {
            trigger = true;
            dateArr.push(midWeek);
            midWeek = [];
        }
    }

    day = 1;
    if(trigger) { //마지막까지 꽉꽉 채웠을 때
        console.log("Okay~");
    } else { //아닐때
        for(let i = midWeek.length; i < 7; i ++) {
            midWeek.push(day);
            day += 1;
        }
        dateArr.push(midWeek);
    }

    if(dateArr.length !== 6) {
        for(let i = day; i < day + 7; i ++) lastWeek.push(i);
        dateArr.push(lastWeek);
    }
    return dateArr;
}


const App = () => {
    makeCalendar(2023, 5); //6월
    const [nowData, setNowData] = useState(5);

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
      return Math.abs(offset) * velocity;
    };

    const images = [
        <>div</>,

    ];
    const [[page, direction], setPage] = useState([0, 0]);
    //makeCalendar(2023, 5);
    const [getMoment, setMoment]=useState(moment());
    const today = getMoment;
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 50 : -50,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
          };
        }
      };
    

    return (
        <MenuDiv>
            <MenuForm>
                <MenuTitle>
                    babble
                </MenuTitle>

                <MenuSubForm>
                    <MenuSubGroup>
                        <MenuRow>
                            <img src={Account}></img>
                            <div>마이페이지</div>
                        </MenuRow>
                        <MenuRow>
                            <img src={Bell}></img>
                            <div>알림</div>
                        </MenuRow>
                        <MenuRow>
                            <img src={Friends}></img>
                            <div>친구</div>
                        </MenuRow>
                        <MenuRow>
                            <img src={PowerOff}></img>
                            <div>로그아웃</div>
                        </MenuRow>

                    </MenuSubGroup>

                        <hr></hr>

                    <MenuSubGroup>
                        <div>자유게시판</div>
                        <div>정보게시판</div>
                        <div>스터디인증</div>
                        <div>덕질게시판</div>
                    </MenuSubGroup>
                </MenuSubForm>

                <div style={{marginTop: "39px"}}></div>

                <MenuCalendar>
                    <div className="title">
                        2023년 {nowData + 1}월
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
                            opacity: { duration: 0.1 }
                        }}
                        style={{
                            position: "absolute",
                            left: "0px",
                            width: "100%",
                            height: "calc(100% - 80px)",
                            backgroundColor: "rgba(0, 0, 0, 0)"
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                                //오른쪽
                                setNowData(nowData + 1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                                setNowData(nowData - 1);
                                //왼쪽
                            }
                        }}
                        >
                            <Calendar data={makeCalendar(2023, nowData)}></Calendar>

                        </motion.div>
                    </AnimatePresence>

                </MenuCalendar>
            </MenuForm>
        </MenuDiv>
    )
}

export default App;