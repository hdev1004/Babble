import styled from "styled-components";

export const BoardEditorDiv = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    width: 98%;
    margin-left: auto;
    margin-right: auto;
`

export const BoardInputDiv = styled.div`
    width: 100%;

    .textarea {
        font-size: 15px;
        outline: 0px;
        border: 0px;
        padding: 10px;
        resize: none;
        width: calc(100% - 10px);
        height: 53px;
    }

`

export const BoardReply = styled.div`
    margin-left: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    background-color: #0085ff;
    border-radius: 5px;
    color: white;
    padding: 5px;
    width: 150px;

    .text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 140px;
    }
    .close {
        color: white;
        margin-left: 10px;
    }

    img {
        cursor: pointer;
        width: 10px;
        height: 10px;
    }
`

export const BoardWriteDiv = styled.div`
    position: absolute;
    right: 5px;
    display: flex;
    flex-direction: row;
    bottom: 0px;

    .length {
        margin-left: 15px;
        margin-top: 35px;
        font-size: 13px;
        width: 48px;
        color: #828282;

    }

    .pencil {
        transition: 0.3s;
        cursor: pointer;
        background-color: #0085ff;
        padding: 10px;
        width: 30px;
        height: 30px;
        border-radius: 15px;

    }

    .pencil:hover {
        box-shadow: 0px 0px 5px #828282;
    }
`