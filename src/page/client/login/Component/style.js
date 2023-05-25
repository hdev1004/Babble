import { styled } from "styled-components"



export const LoginDiv = styled.div`
    min-height: 750px;
    min-width:1340px;
    height: 100%;
    background-color: #EEF7FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
`

export const LoginForm = styled.div`
    transition: 0.3s;
    margin-left: auto;
    margin-right: auto;
    width: 31.25%;
    height: 68.79%;
    box-sizing:border-box;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: 0px 12px 15px lightgray;
    border-radius:15px;
    display: grid;
    grid-template-rows: 2fr 2fr 1fr 1fr 1fr;
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