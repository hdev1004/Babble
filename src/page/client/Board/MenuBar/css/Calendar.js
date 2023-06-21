const { styled } = require("styled-components");

export const CalendarToday = styled.div`
    transition: 0.3s;
    height: 100%;
    display: flex;
    font-weight: bold;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: #0085FF;

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

    &:hover {
        background-color: #F5F5F5;
    }
`