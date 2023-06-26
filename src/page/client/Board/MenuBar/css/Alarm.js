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

    &.left {
        left: 0px;
    }

    &.right {
        left: 380px
    }
`