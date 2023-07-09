import { styled } from "styled-components";

export const HistoryWrap = styled.div`
  max-width: 86%;
  width: 941px;
  background-color: white;
  border: 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px lightgray;
  margin-top: 110px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 40px;
  margin-bottom: 72px;
  table {
    border-collapse: collapse;
  }
  td {
    width: 140px;

    &.title {
      width: 300px;
    }

    & .complete {
      width: 100px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 30px;
      border: 1px solid #fff;
      background: #0085ff;
      color: #fff;
      text-align: center;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      position: relative;
      left: 17px;
      line-height: 40px;
      cursor: pointer;
      letter-spacing: 3.9px;
    }

    & .wait{
        width: 100px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 30px;
      border: 1px solid #0085ff;
      background: #ffffff;
      color: #0085ff;
      text-align: center;
      cursor: pointer;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      position: relative;
      left: 17px;
      line-height: 40px;
      letter-spacing: 3.9px;
    }
  }

  tr {
    height: 60px;
    border-bottom: 1px solid #eaeaea;
  }
  & .border_row {
    border-bottom: 2px solid #828282;
  }
`;
