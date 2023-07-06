import styled from "styled-components";

export const ProfileForm = styled.div`

& .secession{
    color: #828282;
text-align: center;
font-family: Dosis;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: left;
margin-top: 100px;
position: relative;
left: -30px;
  }`;

export const ProfileTop = styled.div`
  max-width: 86%;
  width: 941px;
  height: 247px;
  background-color: white;
  border: 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px lightgray;

  margin-top: 175px;
  margin-left: auto;
  margin-right: auto;

  .line {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 1px;
    background-color: #828282;
  }


`;

export const ProfileBottom = styled.div`
  max-width: 86%;
  width: 941px;
  height: 286px;
  background-color: white;
  border: 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px lightgray;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 37px;
  box-sizing: border-box;

  & .profileSetting_pw {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #828282;;
    padding: 10px 0;
    position: relative;
    img {
      margin-right: 33px;
    }
    span {
      color: #2f2f2f;
      text-align: center;
      font-family: Dosis;
      font-size: 20px;
      font-style: normal;
      font-weight: 200;
      line-height: normal;
    }

    & .font{
        color: #2F2F2F;
text-align: center;
font-family: Dosis;
font-size: 20px;
font-style: normal;
font-weight: 200;
line-height: normal;
    }
    & .date {
      margin-left: 33px;
      color: #828282;
      text-align: center;
      font-family: Droid Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-left: 33px;
      border-left: 1px solid #2f2f2f;
    }

    &.border_last{
        border:none;
    }

    & .update{
        position: absolute;
        right: 0;
    }
  }
`;
export const Change = styled.div`
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  font-size: 17px;
  color: #0085ff;
  border: 1px solid #0085ff;
  position: absolute;
  border-radius: 30px;
  height: 40px;
  line-height: 40px;

  padding-left: 20px;
  padding-right: 20px;
  letter-spacing: 2px;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  margin-top: ${(props) => props.Margintop};
`;
export const ProfileNickname = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 160px;

  .img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 37px;
    margin-right: 15px;
  }

  img {
    width: 80px;
    height: 80px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .nickname {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
  }

  .email {
    font-size: 17px;
    color: #828282;
  }

  .change:hover {
    color: white;
    background-color: #0085ff;
  }
`;

export const ProfileEmail = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  position: relative;

  .img {
    margin-top: 5px;
    margin-left: 57px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .email {
    margin-top: 5px;
    height: 40px;
    line-height: 40px;
    font-size: 17px;
    margin-left: 35px;
    color: #828282;
  }

  .change {
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    font-size: 17px;
    color: #0085ff;
    border: 1px solid #0085ff;
    position: absolute;
    border-radius: 30px;
    height: 40px;
    line-height: 40px;

    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: 2px;
    right: 37px;

    top: 50%;
    margin-top: -20px;
  }
  .change:hover {
    color: white;
    background-color: #0085ff;
  }
`;
