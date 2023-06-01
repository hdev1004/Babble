import { styled } from "styled-components";

export const IdFoundForm = styled.div`
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  width: 770px;
  height: 525px;
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
    
  cursor: pointer;
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
  margin-bottom: 62px;
`;

export const Idtab = styled.div`
 cursor: pointer;
  width: 50%;
  text-align: center;
  &.tab_border {
    border-bottom: 1px solid #0085ff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    span {
      z-index: 100;
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
        z-index: 100;
        color:#828282;
    }
  }

  span{
    font-weight: 700;
    font-family: 'Domine';
    font-size: 18px;
  }
`;

export const FormBox = styled.form`
    width: 66.22%;
    margin:0 auto;
    display: flex;
  flex-direction: column;

    div{
        display: flex;
        align-items: center;
        margin-bottom: 34px;
        label{
            width: 16.26%;
            margin-right: 50px;
            box-sizing: border-box;
        }
        input{
            width: 50.98%;
            margin-right:14px;
            height: 33px;
            padding: 0 10px;
            border-radius: 15px;
            border:1px solid #828282;
            text-size-adjust: inherit;
        }
        button{
            width: 120px;
            border-radius: 15px;
            height: 33px;
            border:1px solid #0085ff;
            background: #ffffff;
            outline: none;
            color:#0085ff;
            cursor: pointer;
            
        }
    }
`
export const IdFindsubmitBtn = styled.button `
    width: 67.84%;
    height: 60px;
    border-radius: 15px;
    background-color: #0085ff;
    border: none;
    color:#ffffff;
    margin: 0 auto;
    font-weight: 600;
    font-family: 'Dosis';
font-style: normal;
    letter-spacing: 0.3em;
    cursor: pointer;
    font-size: 20px;
`