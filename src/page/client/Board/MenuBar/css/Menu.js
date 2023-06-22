const { styled } = require("styled-components");

export const MenuDiv = styled.div`
    width: 282px;
    min-width: 282px;
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

    /* 임의의 영역 생성 */
    /* 아래의 모든 코드는 영역::코드로 사용 */
    &::-webkit-scrollbar {
        width: 5px;  /* 스크롤바의 너비 */
    }
    
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #0085FF; /* 스크롤바의 색상 */
        
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
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