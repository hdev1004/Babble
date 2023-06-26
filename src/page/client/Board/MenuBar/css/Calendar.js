const { styled } = require("styled-components");

export const CalendarToday = styled.div`
    transition: 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: #0085FF;
    border-radius: 50px;

    &:hover {
        background-color: #1263CE;
    }

`

export const CalendarDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
    text-align: center;
    color: ${(props) => props.day.color};
    height: 100%;
    border-radius: 50px;

    &:hover {
        background-color: #F5F5F5;
    }
`