import React from "react";
import { styled } from "styled-components";

const InputBox = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width:100%;

    div {
        position: relative;
        width: 80%;
        margin: 0 auto;
    }

`

const Input = styled.input`
    width: 100%;
    border-spacing: 0px;
    box-sizing : border-box; //100% 넘어가는 문제 해결
    height: 45px;
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
    background-color: black;
    overflow: hidden;

    &::before {
        transition: 0.5s;
        content: '';
        left: -100%;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #0085FF;
        //background: linear-gradient(90deg, #ff1b60, #ff1b60, #2196f3, #9c27b0, #ff1b69);
        //animation: animate 10s linear infinite;
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
    return (
        <InputBox>
            <div>
                <Input type={type} value={value} onChange={(e) => {setValue(e.target.value)}} required></Input>
                <Span>{text}</Span>
                <Bar></Bar>
            </div>
            
        </InputBox>
        
    )
}

export default App;