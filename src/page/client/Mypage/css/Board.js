import styled from "styled-components";

export const BoardWrap = styled.div`
  max-width: 86%;
  width: 941px;
  /* height: 934px; */
  height: 800px;
  background-color: white;
  border: 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px lightgray;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 40px;
  position: relative;
`;
export const BoradTable = styled.div`
  table {
    border-collapse: collapse;
    font-size: 1.125rem;
  }
  td {
    width: 200px;
    height: 50px;
    text-align: center;

    &.title {
      width: 350px;
      text-align: left;
    }
    &.btns {
      display: flex;
      margin-top: 8px;
    }
    & .edit {
      width: 83px;
      height: 40px;
      margin-right: 10px;
      border-radius: 30px;
      font-size: 0.875rem;
      line-height: 40px;
      text-align: center;
      color: #0085ff;
      background: #ffffff;
      border: 1px solid #0085ff;
    }
    & .remove {
      width: 83px;
      height: 40px;
      border-radius: 30px;
      font-size: 0.875rem;
      line-height: 40px;
      text-align: center;
      color: #ffffff;
      background-color: #0085ff;
      border: none;
    }
  }

  tr {
    height: 50px;
    border-bottom: 1px solid #eaeaea;
  }
  & .border_row {
    border-bottom: 2px solid #828282;
  }
`;

export const BoardPage = styled.div`
  position: absolute;
  left: 380px;
  bottom: 20px;
  display: flex;
  button {
    background: #ffffff;
    border: none;
  }
`;
