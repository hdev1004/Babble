import { styled } from "styled-components";

export const MainDiv = styled.div`
  width: 60%;
  min-width: 870px;
  height: auto;
`;

export const MainHeader = styled.div`
  margin-top: 120px;
  margin-left: 60px;
  margin-right: 60px;

  display: flex;
`;

export const BoardTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-right: 5%;
`;

export const SearchForm = styled.div`
  display: flex;
  & > input {
    transition: 0.3s;
    outline: none;
    padding-left: 20px;
    width: 306px;
    height: 45px;
    margin-right: 10px;
    border: solid 1px #828282;
    border-radius: 30px;
  }

  & > input:focus {
    border: 1px solid #0085ff;
  }

  & > button {
    transition: 0.3s;
    cursor: pointer;
    width: 65px;
    height: 46px;
    border: solid 1px #0085ff;
    background-color: #fff;
    border-radius: 30px;
  }

  & > button:hover {
    background-color: #0085ff;
  }

  & img {
    margin-top: 5px;
    width: 25px;
    height: 25px;
  }
`;

export const BoradTotal = styled.div`
  font-size: 1.125rem;
  margin-left: auto;
`;

export const MainBoard = styled.div``;

export const BoardList = styled.div`
  font-size: 1.125rem;

  & > table {
    width: 93%;
    margin: auto;
    margin-top: 10px;
    border-top: solid 3px #828282;
    border-collapse: collapse;
  }

  & > table > thead > tr > td {
    padding: 20px;
    text-align: center;
  }

  & > table > thead > tr > td:nth-child(2) {
    text-align: left;
  }
  & > table > thead > tr > td:nth-child(3) {
    text-align: left;
  }

  & > table > tbody > tr > td {
    border-bottom: solid 1px #eaeaea;
    padding: 20px;
    text-align: center;
  }
  & > table > tbody > tr:nth-child(1) {
    font-weight: bold;
    border-top: solid 1px #eaeaea;
  }
  & > table > tbody > tr:nth-child(1) > td:nth-child(1) {
    color: #ff0000;
  }
  & > table > tbody > tr > td:nth-child(2) {
    text-align: left;
  }
  & > table > tbody > tr > td:nth-child(3) {
    text-align: left;
  }
`;

export const BoardBtns = styled.div`
  width: 93%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  & > button {
    width: 120px;
    height: 45px;
    font-size: 1.125rem;
    background: #0085ff;
    color: #ffffff;
    border-radius: 30px;
    border: none;
  }
`;

export const BoardPage = styled.div`
  & > button {
    border: none;
    background-color: #fff;
  }
`;
