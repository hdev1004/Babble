import styled from "styled-components";

export const ProfileForm = styled.div`
`

export const ProfileTop = styled.div`
    max-width: 86%;
    width: 941px;
    height: 247px;
    background-color: white;
    border: 0px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px lightgray;

    margin-top: 175px;
    margin-left: auto;
    margin-right: auto;

    .line {
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        height: 1px;
        background-color: #828282;
    }
`

export const ProfileBottom = styled.div`
    max-width: 86%;
    width: 941px;
    height: 286px;
    background-color: white;
    border: 0px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px lightgray;

    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;

`

export const ProfileNickname = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 160px;

    .img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 37px;
        margin-right: 15px;
    }

    img {
        width: 80px;
        height: 80px;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .nickname {
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 10px;
    }

    .email {
        font-size: 17px;
        color: #828282;
    }

    .change {
        cursor: pointer;
        transition: 0.3s;
        text-align: center;
        font-size: 17px;
        color: #0085FF;
        border: 1px solid #0085FF;
        position: absolute;
        border-radius: 30px;
        height: 40px;
        line-height: 40px;

        padding-left: 20px;
        padding-right: 20px;
        letter-spacing: 2px;
        right: 37px;

        top: 50%;
        margin-top: -20px;
    }

    .change:hover {
        color: white;
        background-color: #0085FF;
    }
`

export const ProfileEmail = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    position: relative;

    .img {
        
        margin-top: 5px;
        margin-left: 57px;
    }

    img {
        width: 40px;
        height: 40px;
    }

    .email {
        margin-top: 5px;
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        margin-left: 35px;
        color: #828282;
    }

    .change {
        cursor: pointer;
        transition: 0.3s;
        text-align: center;
        font-size: 17px;
        color: #0085FF;
        border: 1px solid #0085FF;
        position: absolute;
        border-radius: 30px;
        height: 40px;
        line-height: 40px;

        padding-left: 20px;
        padding-right: 20px;
        letter-spacing: 2px;
        right: 37px;

        top: 50%;
        margin-top: -20px;
    }
    .change:hover {
        color: white;
        background-color: #0085FF;
    }


`