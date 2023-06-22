import { styled } from "styled-components"


export const BestPostForm = styled.div`
    transition: 0.3s;
    padding: 20px 0px 10px 0px;
    height: 871px;
    overflow: hidden;
    background: #FFFFFF;
    border: 1px solid #828282;
    border-radius: 15px;
    width: ${(props) => props.resize >= props.triggerWidth ? "350px" : "0px"};
    margin-top: 117px;

    &.show {
        scale: 1;
    }

    &.hidden {
        scale: 0;
        animation: animate forwards;
        animation-duration: 0.3s;
        animation-delay: 0.3s;

    }

    @keyframes animate {
        100% {
            width: 0px;
        }
    }

`


export const BestPostTitle = styled.div`
    & > div {
        align-items: center;
        height: calc(100% / 10);
        font-size: 18px;
    }
`

export const IconAndTitle = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 100px;

    img {
        width: 29px;
        height: 29px;
        margin-right: 20px;
    }
`


export const BestNotice = styled.div`
    border: 1px solid #0085FF;
    border-radius: 30px;
    margin : 20px 10px 25px 10px;
    
    .BNotice {
        font-size : 13px;
        text-align: center;
        line-height: 15px;
        padding : 8px 0px 8px 0px;
        color : #0085FF;
    }
`

export const BestPostList = styled.div`

`


export const LIkeAComent = styled.div`
    font-size : 16px;
    display: inline-block;
    margin-right : 15px;
    
    .LikeBtn {
        color : #FF0000;
        display: inline-block;
    }

    .ComentCnt {
        color : #0085FF;
        display: inline-block;
    }

    .Like, .Coment {
        margin : 0px 5px 0px 0px;
    }
`


export const PostRow = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 15px;
    margin : 12px;
    padding : 13px;

    img {
        width: 29px;
        height: 29px;
        margin-right: 20px;
    }

    .BP_kind {
        font-size : 13px;
        font-weight : bold;
        color : #0085FF;
        padding-bottom : 13px;
        line-height: 15px;
    }

    .BP_title {
        font-size : 15px;
        font-weight : bold;
        color : #2F2F2F;
        padding-bottom : 6px;
        line-height: 17px;
    }

    .BP_content {
        font-size : 15px;
        color : #525252;
        line-height: 17px;
        padding-bottom : 6px;
    }
`