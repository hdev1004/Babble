import { styled } from "styled-components";

export const AlertDiv = styled.div`
    transition: 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: center;

    z-index: ${(props) => props.show ? 200 : -10};
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(130, 130, 130, ${(props) => props.show ? 0.5 : 0});
`


export const AlertTitle = styled.div`
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
    img {
        width: 14px;
        height: 14px;
    }
`

export const AlertImg = styled.div`
    margin-top: 34px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
        width: 35px;
        height: 35px;
    }
`

export const AlertText = styled.div`
    margin-top: 15px;
    text-align: center;

    .link {
        text-decoration-color: #0085FF;
	  text-underline-position : under;
        color: #828282;

    }    
`