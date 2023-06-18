import React, { useState } from "react";
import { MenuDiv, MenuForm, MenuSubForm, MenuTitle, MenuSubGroup, MenuCalendar, MenuRow } from "./css/Menu";
import Account from "images/account.png";
import Bell from "images/bell.png";
import Friends from "images/friends.png";
import PowerOff from "images/power-off.png";
import moment from "moment/moment";

const App = () => {
    
    const [getMoment, setMoment]=useState(moment());
    const today = getMoment;

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
                    <div className="title">2023년 5월</div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div>일</div>
                        <div>월</div>
                        <div>화</div>
                        <div>수</div>
                        <div>목</div>
                        <div>금</div>
                        <div>토</div>
                        
                    </div>
                </MenuCalendar>
            </MenuForm>
        </MenuDiv>
    )
}

export default App;