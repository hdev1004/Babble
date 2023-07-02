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
  height: 420px;
  border-radius: 15px;
  overflow-x: hidden;
  overflow-y: auto;

      /* 임의의 영역 생성 */
    /* 아래의 모든 코드는 영역::코드로 사용 */
    &::-webkit-scrollbar {
        width: 5px;  /* 스크롤바의 너비 */
    }
    
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #0085FF; /* 스크롤바의 색상 */
        
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
    }

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

export const FriendList = styled.div`
`;

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
    cursor: pointer;
    transition: 0.3s;
    width: 75px;
    height: 24px;
    font-size: 0.75rem;
    border: none;
    border-radius: 30px;
    background-color: #0085ff;
    color: #ffffff;
  }

  & > button:hover {
    background-color: #2563FF;
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
export const FriendSearchList = styled.div`
  .load {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }

`

export const FriendSearchRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`


export const Lable = styled.div`
  position: relative;

  input {
    transition: 0.3s;
    outline: none;
    padding-left: 15px;
    width: 320px;
    height: 48px;
    margin: 20px 20px 0 20px;
    border: 1px solid lightgray;
    border-radius: 30px;
    box-shadow: 0px 0px 2px 1px lightgray;
  }

  input:focus {
    border: 1px solid #0085ff;
    
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
