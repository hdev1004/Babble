import styled from "styled-components";

export const AlarmDiv = styled.div`
    position: absolute;
    width: 380px;
    height: 500px;
    border-radius: 14px;
`

export const ChatDiv = styled.div`
    position: absolute;
    width: 380px;
    height: 500px;
    background-color: lightgray;
    left: 380px;
    border-radius: 14px;
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
    padding : 25px;

    &.left {
        left: 0px;
    }

    &.right {
        left: 355px
    }
`

export const AlarmList = styled.div`
    border-radius: 15px;
    width: 290px;
    padding : 18px;
    background : #FFFFFF;
    box-shadow: 0px 0px 5px 1px lightgray;
    margin-bottom : 25px;
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
    height:50px;
`

export const Chatting = styled.div`
    background:#FFFFFF;
`