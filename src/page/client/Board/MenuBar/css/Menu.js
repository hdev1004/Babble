const { styled } = require("styled-components");

export const MenuDiv = styled.div`
    width: 100%;
`

export const MenuForm = styled.div`
    width: 282px;
    padding-left: 55px;
`

export const MenuTitle = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:#0085FF;
    
    font-family: 'Dongle', sans-serif;
`

export const MenuSubForm = styled.div`
    padding: 15px;
    border: 1px solid #828282;
    margin-top: -35px;
    border-radius: 15px;
`

export const MenuSubGroup = styled.div`
    padding-left: 15px;

    & > div {
        font-size: 18px;
        height: 47px;
        line-height: 47px;
    }
`

export const MenuCalendar = styled.div`
    height: 298px;
    border: 1px solid #828282;
    border-radius: 15px;
    padding: 15px;
`

export const MenuRow = styled.div`
    display: flex;
    flex-direction: row;

    img {
        margin-top: 7px;
        margin-right: 18px;
        width: 29px;
        height: 29px;
    }
`