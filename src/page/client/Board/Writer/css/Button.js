import styled from "styled-components";

export const StyleBtn = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    color: black;
    border-radius: 15px;
    border: 1px solid lightgray;
    text-align: center;
    line-height: 50px;
`

export const PicktureBtn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-right: 16px;
    cursor: pointer;

    &:hover .text{
        text-shadow: 0px 0px 5px lightgray;
    }

    &:hover img{
        filter: drop-shadow(0px 0px 2px lightgray);
    }

    img {
        transition: 0.3s;
        width: 40px;
        height: 40px;
    }

    .text {
        transition: 0.3s;
        margin-top: 5px;
        text-align: center;
        color: #828282;
    }

`

export const Align = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    //display: "flex", flexDirection: "column", justifyContent: "center"
`

export const FontForm = styled.div`
    width: 110px;
    height: 35px;
    border-radius: 30px;
    border: 1px solid #828282;
    line-height: 35px;
    display: flex;
    flex-direction: row;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    position: relative;

    .num {
        margin-left: 30px;
        color: #828282;
    }

    .down {
        position: absolute;
        top: 9px;
        right: 25px;
        width: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    img {
        transition: 0.3s;
        rotate: ${(props) => props.click ? "180deg" : "0deg"};
        margin-left: 30px;
        width: 18px;
        height: 18px;
    }
`

export const FontList = styled.div`
    overflow: hidden;
    position: absolute;
    margin-top: 7px;
    width: 112px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid rgba(130, 130, 130, 0.5);
    color: #828282;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    & > div {
        cursor: pointer;
        transition: 0.3s;
        height: 25px;
        line-height: 25px;
        text-align: center;
    }

    & > div:hover {
        background-color: rgba(130, 130, 130, 0.1);
    }

`