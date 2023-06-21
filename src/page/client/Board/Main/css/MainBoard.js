import { styled } from "styled-components";

export const MainDiv = styled.div`
  width: 60%;
  height: auto;
`;

export const MainHeader = styled.div`
  margin: 12% 5% 0 5%;

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
    width: 326px;
    height: 45px;
    margin-right: 10px;
    border: solid 1px #828282;
    border-radius: 30px;
  }

  & > button {
    width: 65px;
    height: 46px;
    border: solid 1px #0085ff;
    background-color: #fff;
    border-radius: 30px;
  }
`;

export const BoradTotal = styled.div`
  font-size: 1.125rem;
  margin-left: auto;
`;
