import { styled } from "styled-components"

export const BoardDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const BestPostForm = styled.div`
    padding: 15px;
    width: 350px;
    height: 871px;
    background: #FFFFFF;
    border: 1px solid #828282;
    border-radius: 15px;
`

export const BestPostTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 

    & > div {
        font-size: 18px;
        height: 47px;
        line-height: 47px;
    }
`

export const IconAndTitle = styled.div`
    display: flex;
    flex-direction: row;

    img {
        width: 29px;
        height: 29px;
        padding-right: 10px;
    }
`