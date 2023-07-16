import styled from "styled-components";

export const EditorTitle = styled.div`
    position: relative;
    padding: 25px;
    display: flex;
    flex-direction: row;

    margin-top: 35px;
    width: 70%;
    height: 30px;
    background-color: white;
    border-left: 1px solid #828282;
    border-right: 1px solid #828282;
    border-top: 1px solid #828282;
    
    border-radius: 15px 15px 0px 0px;

    margin-left: auto;
    margin-right: auto;

    .category {
        border-radius: 30px;
        width : 180px;
        height : 40px;
        font-size: 15px;
        color : #2F2F2F;
        padding-left : 20px;       
    }

    .title > input { 
        border : none;
        font-size: 20px;
        color : #2F2F2F;
        padding-left : 35px;
        padding-top : 6px;
    }

    .title > input:focus {
        outline : none;
    }
`

export const EditorLine = styled.div`
    position: absolute;
    margin-top: 47px;
    height: 1px;
    background-color: #828282;
    width: calc(100% - 50px);

`

export const EditorForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-height: 300px;

    color: #555;
    padding: 0px 25px 25px 25px; 
    border-radius: 0px 0px 15px 15px;
    outline: 0px;
    border: 1px solid #828282;
    border-top: 0px;
    width: 70%;
    background-color: white;
    resize: none;

    img {
        width: 300px;
    }

    .line {
        margin-top: 10px;
        margin-bottom: 8px;
        transition: 0.3s;
        line-height: 2px;
        width: 80%;
        height: 2px;
        background-color: #828282;
        border-radius: 15px;
    }
`