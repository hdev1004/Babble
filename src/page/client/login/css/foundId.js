import { styled } from "styled-components";

export const IdFoundForm = styled.div`
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  width: 40.1%;
  height: 48.61%;
  /* height: 525px; */
  background-color: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const IdFoundTitle = styled.div`
  width: 100%;
  height: 24.76%;
  color: #0085ff;
  font-size: 4.375rem;
  text-align: center;

  & > .title {
    font-family: "Dongle", sans-serif;
  }
`;

export const TabSelect = styled.div`
  display: flex;
  height: 56px;
  width: 71.68%;
  /* background: #000000; */
  margin: 0 auto;
  align-items: center;
`;

export const Idtab = styled.div`
  width: 50%;
  text-align: center;
  &.tab_border {
    border: 1px solid #0085ff;
    border-bottom: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    span {
      color: #0085ff;
    }
  }

  &.none_border {
    border-bottom: 1px solid #0085ff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    span{
        color:#828282;
    }
  }

  span{
    font-weight: 700;
    font-family: 'Domine';
    font-size: 18px;
  }
`;
