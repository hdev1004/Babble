import { styled } from "styled-components"



export const LoginDiv = styled.div`
    min-height: 750px;
    height: 100%;
    background-color: #EEF7FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
`

export const LoginForm = styled.div`
    min-width:600px;
    width: 600px;
    max-height: 689px;
    height: 689px;

    transition: 0.3s;
    margin-left: auto;
    margin-right: auto;
    height: 73%;
    box-sizing:border-box;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: 0px 12px 15px lightgray;
    border-radius:15px;
    display: grid;
    grid-template-rows: 1.4fr 1.7fr 1fr 1fr 1fr;
    //로그인 (아이디, 비번), 로그인, 인증 로그인, (아이디 비번 찾기)
    
`

export const LoginTitle = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-size: 4.375rem;
    letter-spacing: 49%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:#0085FF;
    font-family: 'Dongle', sans-serif;

  
`
export const LoginInputDiv = styled.div`



`

export const LoginBtn = styled.div`
    transition: 0.3s;
    background-color: #0085FF;
    width:57.67%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: white;
    height: 59px;
    font-size:1.25rem;
    font-weight:600;
    line-height: 59px;
    border-radius: 15px;
    display:grid;
    place-items: center;
    cursor:pointer;

    &:hover {
        background-color: #2563FF;
        box-shadow: 2px 2px 10px lightgray;
    }
    `

export const LoginAuth = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;


    div > img {
        cursor: pointer;
        transition: 0.3s;
    }
    div > img:hover {
        filter: drop-shadow(2px 2px 10px lightgray); 
    }
`

export const LoginFind = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    & > .footer_menu{
        margin-left:15px;
        margin-right:15px;
        position:relative;
    }

    & > .line1::after {
        content: "";
        position:absolute;
        left:96px;
        top:0;
        display : block;
        width:2px;
        height:24px;
        background:#525252;
    }
        & > .line2::after {
            content: "";
            position:absolute;
            left:115px;
            top:0;
            display : block;
            width:2px;
            height:24px;
            background:#525252;
    }
`