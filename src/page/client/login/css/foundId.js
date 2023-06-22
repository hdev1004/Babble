import { styled } from "styled-components";

export const IdFoundForm = styled.div`
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  width: 770px;
  height: ${(props) => props.tabBorder === "id" ? (props.idIsFind ? "604px" : "525px") : (props.pwIsFind ? "661px" : "592px")};
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
    font-family: 'Dongle', sans-serif;
    cursor: pointer;
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
    font-size: 18px;
  }
`;

export const FormBox = styled.form`
    /*width: 66.22%;*/
    width: 552px;
    margin:0 auto;
    display: flex;
  flex-direction: column;

    div{
        display: flex;
        align-items: center;
        margin-bottom: 34px;
        label{
            width: 116px;
            /*width: 16.26%;*/
            box-sizing: border-box;
        }
  
        input{
            /*width: 50.98%;*/          
            margin-right: 14px;
            width: 260px;
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

export const FindFormBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 552px;
`

export const FindIdTextBox = styled.div`
  text-align: center;
`

export const EnabledBtn = styled.button`
  width: 255px;
  height: 59px;
  border-radius: 15px;
  border: 0;
  font-size: 20px;
  letter-spacing: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  color: white;
  background-color: #0085FF;

  &:hover {
    background-color: #2563FF;
    box-shadow: 2px 2px 10px lightgray;
  }
`

export const DisabledBtn = styled.button`
  width: 255px;
  height: 59px;
  border-radius: 15px;
  border: 0;
  font-size: 20px;
  letter-spacing: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  color: white;
  background-color: #828282;

  &:hover {
    background-color: #5E5E5E;
    box-shadow: 2px 2px 10px lightgray;
  }
`

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 56px;
`

export const IdFindsubmitBtn = styled.button `
    transition: 0.3s;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

    width: 67.84%;
    height: 60px;
    border-radius: 15px;
    background-color: #0085ff;
    border: none;
    color:#ffffff;
    font-weight: 600;
font-style: normal;
    letter-spacing: 0.3em;
    cursor: pointer;
    font-size: 20px;
    
    &:hover {
      background-color: #2563FF;
      box-shadow: 2px 2px 10px lightgray;
    }
`

export const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  position: relative;

  div {
    width: 167px;
    height: 33px;
    line-height: 33px;
    font-size: 18px;
  }

  input {
    transition: 0.3s;
    border: 1px solid #828282;
    border-radius: 15px;
    outline: none;
    padding-left: 15px;
    width: 221px;
    height: 33px;
    box-sizing: border-box;
  }

  input:focus {
    border: 1px solid #0085ff;
  }

  span {
    font-size: 12px;
    color: #E71F19;
    position: absolute;
    top: 40px;
    left: 167px;
  }
`