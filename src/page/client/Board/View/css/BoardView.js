import styled from "styled-components";
import Heart from "images/heartSpread.png";

export const BoardViewDiv = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #F3F9FF;
`

export const BabbleTitle = styled.div`
    height: 121px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid rgba(130, 130, 130, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        margin-left: 58px;
        cursor: pointer;
        width: 150px;
    }
`

export const BoardViewForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    padding: 25px;
    width: 50%;
    border-radius: 15px;
    border: 1px solid rgba(130, 130, 130, 0.5);
    background-color: white;
    margin-bottom: 50px;

    .line {
        margin-left: auto;
        margin-right: auto;
        width: 98%;
        height: 1px;
        background-color: rgba(130, 130, 130, 0.5);
    }
`

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;

    height: 70px;

    .category {
        width: 115px;
        height: 40px;
        font-weight: bold;
        border: 1px solid rgba(130, 130, 130, 0.5);
        line-height: 40px;
        text-align: center;
        border-radius: 50px;
    }

    .title {
        margin-left: 35px;
        font-size: 25px;
    }

`

export const InfoGroup = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 98%;
    display: flex;
    flex-direction: row;

    .nickname {
        margin-right: 80px;
    }
`

export const LikeGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;

    .content {
        padding: 13px 20px;
        border-radius: 5px;
        display: flex;
        cursor: pointer;
        position: relative;
        
    }

    .heart {
        height: 90px;
        width: 90px;
        background: url(${Heart}) no-repeat;
        background-position: left;
        background-size: 2900%;
        position: absolute;
        top: 50%;
        left: 21%;
        transform: translate(-50%, -50%);
    }

    .heart.active {
        background-position: right;
        animation: animate .8s steps(28) 1;
    }


    @keyframes animate {
        0% {
            background-position: left;
        }

        100% {
            background-position: right;
        }
    }


    .num {
        transition: 0.3s;
        margin-left: 15px;
        color: #9C9496;
        //color: #E2264D;
    }

    .num.active {
        margin-left: 15px;
        color: #E2264D;
    }


    .comment {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 90px;
    }
    .comment img {
        height: 29px;
    }
    .comment .num {
        margin-left: 6px;
    }
`

export const Post = styled.div`
    width: 98%;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
`