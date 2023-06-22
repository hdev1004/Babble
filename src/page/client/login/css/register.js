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
    max-width: 717px;
    max-height: 694px;
    min-height: 694px;

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
    cursor: pointer;
    height: 145px;
    margin-left: auto;
    margin-right: auto;
    font-size: 4.375rem;
    letter-spacing: 49%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:#0085FF;
    font-family: 'dongle';
`

export const RegisterBody = styled.div`
    width: 570px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const RegisterRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`
export const RegisterTableTitle = styled.div`
    width: 129px;
    height: 33px;
    line-height: 33px;
    font-size: 18px;
`

export const RegisterInput = styled.input`
    padding-top: 0px;
    padding-bottom: 0px;
    box-sizing : border-box;

    width: 221px;
    height: 33px;
    border-radius: 15px;
    outline: none;
    border: 1px solid #828282;
    padding-left: 15px;
    transition: 0.3s;

    &:focus {
        border: 1px solid #0085FF;
    }
`

export const RegisterNoti = styled.div`
    font-size: 12px;
    color: #E71F19;
    position: absolute;
    top: 40px;
    left: 129px;
`

export const RegisterLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(130, 130, 130, 0.5);
`

export const RegisterButton = styled.button`
    margin-left: 11px;
    width: 120px;
    border-radius: 15px;
    height: 33px;
    border:1px solid #0085ff;
    background: #ffffff;
    outline: none;
    color:#0085ff;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 0.1em;
`

export const RegisterSubmit = styled.button`
    transition: 0.3s;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

    width: 346px;
    height: 60px;
    border-radius: 15px;
    background-color: #0085ff;
    border: none;
    color:#ffffff;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.3em;
    cursor: pointer;
    font-size: 20px;

    
  &:hover {
    background-color: #2563FF;
    box-shadow: 2px 2px 10px lightgray;
  }
`

export const RegisterEmail = styled.div`
    display: flex;
    flex-direction: row;

    .email_id {
        padding-left: 15px;
        box-sizing: border-box;
        transition: 0.3s;
        width: 154px;
        height: 33px;
        border-radius: 15px;
        border: 1px solid #828282;
        outline: none;
    }

    .email_id:focus {
        border: 1px solid #0085FF;
    }

    span {
        width: 25px;
        text-align: center;
        height: 33px;
        line-height: 33px;
        font-weight: bold;
    }

    select {
        padding-left: 5px;
        box-sizing: border-box;
        transition: 0.3s;
        width: 98px;
        height: 33px;
        border-radius: 15px;
        border: 1px solid #828282;
        outline: none;
    }

    .email_tail {
        margin-left: 10px;
        padding-left: 15px;
        box-sizing: border-box;
        transition: 0.3s;
        width: 127px;
        height: 33px;
        border-radius: 15px;
        border: 1px solid #828282;
        outline: none;
    }

    .email_tail:focus {
        border: 1px solid #0085FF;
    }
`