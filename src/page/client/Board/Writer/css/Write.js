import styled from "styled-components";

export const WriteDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-width: 1300px;
    background-color: #F3F9FF;
`

export const WriteTitle = styled.div`
    height: 120px;
    background-color: white;
    border-bottom: "1px solid lightgray";

    //{height: "80px", backgroundColor: "white", borderBottom: "1px solid lightgray"
`

export const WriteMenu = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(130, 130, 130, 0.6);

    .picture {
        display: flex;
        flex-direction: row;

    }

    .custom {
        display: flex;
        flex-direction: row;

    }

    .align {
        display: flex;
        flex-direction: row;
    }

    .line {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .line > div {
        margin-left: 50px;
        margin-right: 50px;
        height: 80%;
        width: 1px;
        background-color: rgba(130, 130, 130, 0.6);
    }

    //{height: "80px", backgroundColor: "white", borderBottom: "1px solid lightgray"
`

export const EditorBabble = styled.div`
    min-width: 150px;
    width: 150px;
    height: 100%;
    margin-left: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        cursor: pointer;
        width: 100%;
    }
`

export const MenuAlign = styled.div`
    display: flex;
    flex-direction: row;

    margin-left: auto;
    margin-right: auto;
`

export const EditorDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

`

export const EditorIcon = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 21px;
    margin-left: 5px;
    margin-right: 5px;

    & svg {
        transition: 0.3s;
        cursor: pointer;
    }

    & svg:hover {
        filter: drop-shadow(0px 0px 5px rgba(130, 130, 130, 0.4));
    }
`
