import styled from "styled-components";

export const AlarmDiv = styled.div`
    position: absolute;
    width: 380px;
    height: 500px;
    border-radius: 14px;
`

export const ChatDiv = styled.div`
    position: absolute;
    height: 500px;
    background-color: #F5F6F8;
    left: 380px;
    border-radius: 14px;

    .title {
        height: 64px;
        display: flex;
        flex-direction: row;
        background-color: white;
    }

    .Chat_back {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img {
        margin-left: 20px;
        width : 30px;
        height : 30px;
    }

    .Chat_in_name {
        padding-left: 10px;
        font-size: 18px;
        font-weight : bold;
        background-color: white;
        height : 64px;
        line-height: 64px;
        width : 310px;
    }

    .Chat_today {
        border-radius: 30px;
        height : 30px;
        width : 250px;
        background:#F5F6F8;
        border: 1px solid #2F2F2F;
        text-align : center;
        padding-top : 10px;
        margin-left : 60px;
        font-size: 16px;

        margin-top:20px;
        margin-bottom:20px;
    }

    .cute_img {
        border-radius: 15px;
        width: 50px;
        height: 50px;
        margin-right : 20px;
    }

    .Chat_youone {
        display: flex;
        flex-direction: row;
    }

    .Chat_one {
        background : white;
        font-size: 16px;
        height : 30px;
        width : 130px;
        padding : 12px 6px 2px 6px;
        margin-top : 8px;
        text-align : center;
        border-radius: 15px;
        box-shadow: 0px 0px 5px 1px lightgray;
    }

    .Chat_time_one {
        margin : 30px 0px 0px 10px;
    }

    .Chat_youtwo {
        display: flex;
        flex-direction: row;
    }

    .Chat_two {
        background : white;
        font-size: 16px;
        height : 30px;
        width : 100px;
        padding : 12px 6px 2px 6px;
        margin-top : 10px;
        margin-left : 90px;
        text-align : center;
        border-radius: 15px;
        box-shadow: 0px 0px 5px 1px lightgray;
    }

    .Chat_time_two {
        margin : 30px 0px 0px 10px;
    }

    .Chat_send {
        display: flex;
        flex-direction: row;
        align-items:center;
        position: relative;
        
        background : white;
        box-shadow: 0px 0px 5px 1px lightgray;
        border-radius: 15px;
        height : 60px;
        width : 340px;
        margin : 160px 0px 0px 20px;

        .Chat_message {
            color : #828282;
            margin-left : 20px;
            margin-right : 176px;
        }
    }
`

export const AlarmTitle = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    & > div {
        cursor: pointer;
        flex: 1;
        text-align: center;
        height: 64px;
        line-height: 64px;
        background-color: white;
    }

    .bar {
        transition: 0.3s;
        position: absolute;
        width: 100px;
        height: 3px;
        background-color: #0085ff;
        top: 60px;
    }

`

export const AlarmForm = styled.div`
    position: relative;

    & > div {

    }

`

export const AlarmSubForm = styled.div`
    position: absolute;
    width: 380px;
    height: 420px;
    border-radius: 15px;
    overflow-x: hidden;
    overflow-y: auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;

        /* 임의의 영역 생성 */
    /* 아래의 모든 코드는 영역::코드로 사용 */
    &::-webkit-scrollbar {
        width: 5px;  /* 스크롤바의 너비 */
    }
    
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #0085FF; /* 스크롤바의 색상 */
        
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
    }

    &.left {
        left: 0px;
    }

    &.right {
        left: 380px
    }
`

export const AlarmList = styled.div`
    border-radius: 15px;
    width: 290px;
    padding : 18px;
    background : #FFFFFF;
    box-shadow: 0px 0px 5px 1px lightgray;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover {
        background-color: #e2e2e2;
    }
`

export const AlarmRow = styled.div`
    display: flex;
    padding : 5px 0px 0px 5px;

    .Alarm_kind {
        font-weight : bold;
        font-size : 15px;
        padding-right: 15px;
    }

    .Alarm_time {
        color : #828282;
        font-size : 15px;
    }
`

export const AlarmRow2 = styled.div`
    padding : 0px 0px 5px 5px;

    .Alarm_content {
        padding-top : 15px;
        font-size : 18px;
    }
`

export const ChattingList = styled.div`
    background:#FFFFFF;
    display: flex;
`

export const ChattingOne = styled.div`
    background:white;
    height:90px;
    width: 90px;
    display: flex;

    img {
        width: 70px;
        height: 70px;
        margin:10px;
        border-radius: 15px;
    }
`

export const ChattingTwo = styled.div`
    background:white;
    width : 190px;
    padding-left : 10px;

    .Chat_name {
        margin-top : 20px;
        font-size: 18px;
        font-weight : bold;
    }

    .Chat_content {
        margin-top : 8px;
        font-size: 15px;
    }
`

export const ChattingThree = styled.div`
    font-size: 15px;
    padding-top : 20px;
    width:90px;
    text-align:center;
    background:white;

    .Chat_message {
        margin : 10px 15px 0px 0px;
        font-size: 15px;
        color : white;
        background : #0085FF;
        border-radius: 30px;
        height:20px;
        width:60px;
    }
`

export const Chat_today = styled.div`
    
`