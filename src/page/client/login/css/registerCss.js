import { styled } from "styled-components"

export const RegisterDiv = styled.div`
    min-height: 750px;
    height: 100%;
    background-color: #EEF7FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
`

export const RegisterForm = styled.div`
    min-width:717px;
    width: 717px;
    max-height: 694px;
    height: 694px;

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

export const RegisterTitle = styled.div`
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

export const RegisterBody = styled.div`
    display: flex;
    flex-direction: column;
`