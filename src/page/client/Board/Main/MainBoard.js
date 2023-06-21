// eslint-disable-next-line jsx-a11y/alt-text
import React from "react";
import {
  MainDiv,
  MainHeader,
  BoardTitle,
  SearchForm,
  BoradTotal,
} from "./css/MainBoard";
import search from "images/search.png";

const App = ({ type }) => {
  return (
    // <div>
    //   Board {type}
    // </div>

    <MainDiv>
      <MainHeader>
        <BoardTitle>
          <div>자유게시판</div>
        </BoardTitle>
        <SearchForm>
          <input type="" placeholder="      검색어를 입력해 주세요" />
          <button>
            <img src={search} />
          </button>
        </SearchForm>
        <BoradTotal>
          <p>총 9개</p>
        </BoradTotal>
      </MainHeader>
    </MainDiv>
  );
};

export default App;
