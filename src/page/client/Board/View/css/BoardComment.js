import styled from "styled-components";

export const CommentBlock = styled.div`
    margin-bottom: 15px;
`

export const CommentDiv = styled.div`
    width: 98%;
    margin-left: auto;
    margin-right: auto;
`

export const CommentTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CommentNickname = styled.div`
    display: flex;
    flex-direction: row;
    height: 25px;
    line-height: 25px;

    img {
        width: 23px;
        height: 23px;
    }

    .name {
        margin-left: 10px;
    }

    .date {
        margin-left: 20px;
    }
`

export const CommentNoti = styled.div`
    height: 25px;
    line-height: 25px;
    display: flex;
    flex-direction: row;

    .left {
        transition: 0.3s;
        cursor: pointer;
        margin-right: 15px;
    }

    .right {
        transition: 0.3s;
        cursor: pointer;
    }

    .left:hover {
        color: #0085FF;
    }

    .right:hover {
        color: #0085FF;
    }
`

export const CommentText = styled.div`
    height: 25px;
    line-height: 25px;
    display: flex;
    flex-direction: row;
`