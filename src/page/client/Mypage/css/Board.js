import styled from "styled-components";

export const BoardForm = styled.div`
  max-width: 86%;
  width: 941px;
  /* height: 934px; */
  height: 820px;
  background-color: white;
  border: 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px lightgray;

  margin-top: 110px;
  margin-left: auto;
  margin-right: auto;
`;

export const BoardTable = styled.div`
  font-size: 1.125rem;

  & > table {
    width: 90%;
    border-collapse: collapse;
    margin-left: 40px;
  }

  & > table > thead > tr > td {
    color: #525252;
    padding: 22px;
    border-bottom: solid 1px #000000;
    text-align: center;
  }

  & > table > thead > tr > td:nth-child(2) {
    text-align: left;
  }

  & > table > tbody > tr > td {
    padding: 12px;
    border-bottom: solid 1px #eaeaea;
    text-align: center;
  }

  & > table > tbody > tr > td:nth-child(2) {
    text-align: left;
  }

  & > table > tbody > tr > td > button {
    width: 83px;
    height: 40px;
    border-radius: 30px;
    font-size: 0.875rem;
  }
  .edit_btn {
    color: #0085ff;
    background-color: #ffffff;
    border: 1px solid #0085ff;

    margin-right: 10px;
  }
  .remove_btn {
    border-radius: 30px;
    color: #ffffff;
    background-color: #0085ff;
    border: none;
  }
`;
