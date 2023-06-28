import styled from "styled-components";

export const ProfileDiv = styled.div`
    height: 100%;
    overflow-y: auto;
    width: 43.4%;
    background-color: white;
    z-index: 20;
`

export const ProfileForm = styled.div`
    margin-top: 10%;
    height: 80%;
    text-align: center;
    width: 55%;
    margin-left: auto;
    margin-right: auto;
`

export const ProfileUserForm = styled.div`
    .user {
        width: 130px;
        height: 130px;
        margin-left: auto;
        margin-right: auto;

        & > img {
            width: 100%;
            height: 100%;
        }
    }

    .nickname { 
        margin-top: 10px;
        font-weight: bold;
        font-size: 25px;
    }

    .email {
        line-height: 40px;
        color: #828282;
    }
`

export const ProfileMenuForm = styled.div`
    margin-top: 80px;
    margin-bottom: 70px;
    .menu {
        line-height: 50px;
        font-size: 23px;
    }
`

export const ProfileSubMenuForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 83px;

    .menu {
        color: #828282;
        text-align: center;
        width: 100px;
    }
`