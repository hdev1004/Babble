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

export const ListRow = styled.div`
  & {
    display: flex;
    margin: 25px 20px 25px 20px;
    padding: 3px;
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
