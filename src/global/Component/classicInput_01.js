import { PasswordView } from "page/client/login/css/login";
import React, { useState } from "react";
import { styled } from "styled-components";
import view from "images/view.png";
import viewHidden from "images/viewHidden.png";

const InputBox = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width:71%;
    margin-left: auto;
    margin-right: auto;
    .box {
        position: relative;
        width: 80%;
        margin: 0 auto;
    }

`

const Input = styled.input`
    border-spacing: 0px;
    box-sizing : border-box; //100% 넘어가는 문제 해결
    height: 45px;
    width:100%;
    font-weight:400;
    border: none;
    outline:none;
    font-size:1.25rem;

    &:focus ~ span, &:valid ~ span {
        color: #0085FF;
        transform: translateY(-16px);
        font-size: 0.8em;
    }

    &:focus ~ i::before, &:valid ~ i::before {
        left: 0;
    }
`

const Span = styled.span`
    transition: 0.5s;
    position: absolute;
    left: 0px;
    padding-top: 10px;
    padding-left: 0px;
    text-transform: uppercase;
    pointer-events: none;
    letter-spacing: 0.1em;
    color: gray;
`

const Bar = styled.i`
    border-radius: 30px;
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;
    background-color: #828282;
    overflow: hidden;

    &::before {
        transition: 0.5s;
        content: '';
        left: -100%;
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(#0DB9FF, #4B9AEB, #4F81FF, #3844E8, #2200E8);
        animation: animate 10s linear infinite;
    }
    
    @keyframes animate {
        
        0% {
            background-position-x: left;
        }

        50% {
            background-position-x: 500px;
        }

        100% {
            background-position-x: 0px;
        }
    }
`

const App = ({text, value, setValue, type}) => {
    const [pwShow, setPwShow] = useState(false);

    return (
        <InputBox>
            <div className="box">
                <Input type={pwShow && type ==="password" ? "text" : type} value={value} onChange={(e) => {setValue(e.target.value)}} required></Input>
                <Span>{text}</Span>
                <Bar></Bar>

                {
                    type === "password" ? (
                        <PasswordView>
                            <img src={pwShow ? viewHidden : view} onClick={() => {setPwShow(!pwShow)}}></img>   
                        </PasswordView>
                    ) : <></>
                }
            </div>
            
        </InputBox>
        
    )
}

export default App;