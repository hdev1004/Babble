// eslint-disable-next-line jsx-a11y/alt-text
import React, { useState } from "react";
import {
  MainDiv,
  MainHeader,
  BoardTitle,
  SearchForm,
  BoradTotal,
} from "./css/MainBoard";
import search from "images/search.png";
import search_white from "images/search_white.png";


const App = ({ type }) => {
  const [isBtnHover, setIsBtnHover] = useState(false);

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
          <input type="" placeholder="검색어를 입력해 주세요" />
          <button onMouseOver={() => {setIsBtnHover(true)}} onMouseOut={() => {setIsBtnHover(false)}}>
            <img src={isBtnHover? search_white : search} />
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
