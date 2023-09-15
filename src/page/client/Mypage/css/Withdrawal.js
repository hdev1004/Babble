import { styled } from "styled-components";

export const WithdrawalBg = styled.div`
  width: 100vw;
  height: 100vh;

  background: #f3f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WithdrawalWrap = styled.div`
  position: relative;
  max-width: 86%;
  padding: 50px;
  width: 1118px;
  height: 612px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.15);
  zoom: 90%;

  h3 {
    margin: 0;
    color: #0085ff;
    font-size: 30px;
    font-weight: 700;
    line-height: normal;
  }
  & .title_content {
    margin: 0;
    margin-top: 30px;
    color: #2f2f2f;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  h4 {
    color: #2f2f2f;
    font-size: 25px;
    font-weight: 400;
  }

  & .content {
    color: #828282;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 50px;
  }

  & .mb {
    margin-bottom: 20px;
  }

  input[type="checkbox"] {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid #eaeaea;
    background: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    top: 13px;
    margin-right: 10px;
  }

`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
   
  span {
    color: #2f2f2f;
    font-size: 20px;
    font-weight: 700;
  }

  & .Btn_section {
    display: flex;
    position: relative;
    top: 10px;

    div {
        cursor: pointer;
      width: 97px;
      height: 45px;
      flex-shrink: 0;
      text-align: center;
      line-height: 45px;
    }

    & .back{
        cursor: pointer;
        border-radius: 30px;
        border: 1px solid #0085FF;
        background: #FFF;
        color: #0085FF;
        margin-right: 10px;
    }

    & .check{
        border-radius: 30px;
        border: 1px solid #FFF;
        background: #0085FF;
        color:#ffffff;
    }
  }
`;
