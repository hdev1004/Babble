import React from "react";
import { MenuDiv, MenuForm, MenuSubForm, MenuTitle, MenuSubGroup, MenuCalendar, MenuRow } from "./css/Menu";
import Account from "images/account.png";
import Bell from "images/bell.png";
import Friends from "images/friends.png";
import PowerOff from "images/power-off.png";

const App = () => {
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
                    달력
                </MenuCalendar>
            </MenuForm>
        </MenuDiv>
    )
}

export default App;