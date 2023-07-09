import { styled } from "styled-components";

export const CommentWrap = styled.div`
  max-width: 86%;
  width: 941px;
  /* height: 934px; */
  height: 820px;
  background-color: white;
  border: 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px lightgray;
  padding: 37px;
  margin-top: 110px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  span {
    color: #2f2f2f;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    & .count {
      color: #0085ff;
    }
  }
`;

export const ContentsInner = styled.div`
  display: flex;
  margin-top: 47px;

  input[type="checkbox"] {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    margin-right: 26px;
    margin-top: 12px;
    transition: 0.5s;
 }

 img {
    width: 60px;
    height: 60px;
    margin-right: 26px;
 }
`;


export const CommendRecordBox = styled.div `
    p{
        margin: 0;

        &.re_commend{
            padding-left: 20px;
            border-left: 5px solid #828282;;
            margin-bottom: 16px;
        }
    }
    span{
        color: #828282;
text-align: center;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }

    & .content{
        color: #2F2F2F;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 12px;
    }
`

export const DeleteBtn = styled.button `
    width: 121px;
height: 45px;
flex-shrink: 0;
border-radius: 30px;
background: #0085FF;
color: #FFF;
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 5.4px;
border: none;
position: absolute;
bottom: 0;
right: 0;
margin: 37px;
`