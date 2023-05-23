import { styled } from "styled-components"

export const LoginDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5F7FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
`

export const LoginForm = styled.div`
    transition: 0.3s;
    margin-left: auto;
    margin-right: auto;

    width: 40%;
    height: 80%;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: 0px 12px 15px lightgray;

    display: grid;
    grid-template-rows: 2fr 2fr 1fr 1fr 1fr;
    //로그인 (아이디, 비번), 로그인, 인증 로그인, (아이디 비번 찾기)
    
`

export const LoginTitle = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-size: 40px;
    letter-spacing: 49%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LoginInputDiv = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
        width: 90%;
        border-spacing: 0px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 45px;
        padding-left: 15px;
    }
`

export const LoginBtn = styled.div`
    background-color: #8482FF;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 43px;
`

export const LoginAuth = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
`

export const LoginFind = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;

`