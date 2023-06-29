import styled from "styled-components";

export const FriendDiv = styled.div`
  position: absolute;
  width: 380px;
  height: 500px;
  border-radius: 14px;
`;

export const FriendTitle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  & > div {
    cursor: pointer;
    flex: 1;
    text-align: center;
    height: 64px;
    line-height: 64px;
    background-color: white;
  }

  .bar {
    transition: 0.3s;
    position: absolute;
    width: 90px;
    height: 3px;
    background-color: #0085ff;
    top: 60px;
  }
`;

export const AlarmForm = styled.div`
  position: relative;

  & > div {
  }
`;

export const FriendSubForm = styled.div`
  position: absolute;
  width: 380px;

  &.left {
    left: 0px;
  }

  &.mid {
    left: 380px;
  }

  &.right {
    left: 760px;
  }
`;

export const FriendList = styled.div``;

export const FriendRow = styled.div`
  & {
    width: 337px;
    height: 65px;
    display: flex;
    margin: 25px 20px 25px 20px;
    align-items: center;
    font-size: 1.125rem;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px lightgray;
  }
  & > img {
    width: 25px;
    height: 25px;
    margin-left: 20px;
    margin-right: 20px;
  }

  & > p {
    width: 180px;
  }

  & > button {
    width: 75px;
    height: 24px;
    font-size: 0.75rem;
    border: none;
    border-radius: 30px;
    background-color: #0085ff;
    color: #ffffff;
  }
`;

export const AddList = styled.div``;

export const AddRow = styled.div`
  & {
    width: 337px;
    height: 93px;
    margin: 25px 20px 25px 20px;
    font-size: 1.125rem;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px lightgray;
  }
`;
export const AddInfo = styled.div`
  & {
    display: flex;
    align-items: center;
  }
  & > img {
    width: 25px;
    height: 25px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  & > div {
    width: 180px;
    margin-top: 20px;
  }

  & > div:last-child {
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
  }
`;
export const AddBtns = styled.div`
  & {
    display: flex;
    float: right;
    margin-top: 10px;
  }
  & > button {
    width: 53px;
    height: 24px;
    border-radius: 30px;
    border: none;
  }

  & > button:nth-child(1) {
    background: #0085ff;
    color: #ffffff;
    margin-right: 10px;
  }

  & > button:nth-child(2) {
    background: #ffffff;
    color: #0085ff;
    border: 1px solid #0085ff;
    margin-right: 20px;
  }
`;

export const FriendSearch = styled.div``;

export const Lable = styled.div`
  position: relative;

  input {
    width: 335px;
    height: 48px;
    margin: 20px 20px 0 20px;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 0px 2px 1px lightgray;
  }
  button {
    position: absolute;
    top: 32px;
    right: 34px;
    border: none;
    background: #ffffff;
    > img {
      width: 24px;
      height: 24px;
    }
  }
`;

// export const FriendSearch = styled.div`
//   & > input {
//     width: 335px;
//     height: 48px;
//     margin: 20px 20px 0 20px;
//     border-radius: 30px;
//     border: none;
//     box-shadow: 0px 0px 2px 1px lightgray;
//   }

//   & > button {
//     border: none;
//     background: #ffffff;
//     > img {
//       width: 24px;
//       height: 24px;
//     }
//   }
// `;
