const { styled } = require("styled-components");

export const MenuDiv = styled.div`
    width: 14.6%;
    padding-left: 2.8%;
`

export const MenuForm = styled.div`
    width: 100%;
    height: 49.5%;
`

export const MenuTitle = styled.div`
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;

    img {
        width: 80%;
    }
`

export const MenuSubForm = styled.div`
    height: 100%;
    padding: 15px;
    border: 1px solid #828282;
    border-radius: 15px;
`

export const MenuSubGroup = styled.div`
    transition: 0.3s;
    height: 48%;
    overflow: auto;
    padding-left: 15px;

    & > div {
        align-items: center;
        height: calc(100% / 4);
        font-size: 18px;
    }
`

export const MenuCalendar = styled.div`
    width: 100%;
    height: 27.5%;
    overflow: hidden;
    margin-top: 50px;

    border: 1px solid #828282;
    border-radius: 15px;
    position: relative;

    .title {    
        height: 30px;
        line-height: 30px;
        font-weight: bold;
        text-align: center;
    }

    .weeks {
        font-weight: bold;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        text-align: center;
    }
`

export const MenuRow = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;

    img {
        margin-right: 18px;
        width: 29px;
        height: 29px;
    }
`