import { styled } from "styled-components";

export const MainDiv = styled.div`
  width: 70%;
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
