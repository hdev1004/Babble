// eslint-disable-next-line jsx-a11y/alt-text
import React, { useState } from "react";
import {
  MainDiv,
  MainHeader,
  BoardTitle,
  SearchForm,
  BoradTotal,
  MainBoard,
  BoardList,
  BoardBtns,
  BoardPage,
} from "./css/MainBoard";
import search from "images/search.png";
import search_white from "images/search_white.png";
import left from "images/left.png";
import right from "images/right.png";
import more_left from "images/more_left.png";
import more_right from "images/more_right.png";
import number1 from "images/number1.png";
import number2 from "images/number2.png";
import { useNavigate } from "react-router-dom";

const App = ({ type }) => {
  const [isBtnHover, setIsBtnHover] = useState(false);
  const naviate = useNavigate();

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
          <button
            onMouseOver={() => {
              setIsBtnHover(true);
            }}
            onMouseOut={() => {
              setIsBtnHover(false);
            }}
          >
            <img src={isBtnHover ? search_white : search} />
          </button>
        </SearchForm>
        <BoradTotal>
          <p>총 9개</p>
        </BoradTotal>
      </MainHeader>
      <MainBoard>
        <BoardList>
          <table>
            <thead>
              <tr>
                <td>번호</td>
                <td>제목</td>
                <td>글쓴이</td>
                <td>좋아요</td>
                <td>등록일</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>안내</td>
                <td>개인 정보에 관련하여 포스팅 및 언급 금지입니다.</td>
                <td>관리자</td>
                <td>54</td>
                <td>2023.03.05</td>
              </tr>
              <tr>
                <td>9</td>
                <td>조던이 너무 사고싶어요</td>
                <td>꼬순내마루</td>
                <td>36</td>
                <td>2023.05.24</td>
              </tr>
              <tr>
                <td>8</td>
                <td>매일 10시 / 각자 공부할 거 공부하는 스터디 할 사람?</td>
                <td>알사탕으로경로당짱먹기</td>
                <td>36</td>
                <td>2023.05.14</td>
              </tr>
              <tr>
                <td>7</td>
                <td>프론트단 오류에 대해 포스팅 했음요</td>
                <td>나는야이슈</td>
                <td>34</td>
                <td>2023.05.01</td>
              </tr>
              <tr>
                <td>6</td>
                <td>달밤에 피에 미친 폭주 누계농 ㅈㄱㄴ</td>
                <td>누가계속농구하래</td>
                <td>52</td>
                <td>2023.04.28</td>
              </tr>
              <tr>
                <td>5</td>
                <td>술도녀 강지구 너무 좋아</td>
                <td>정은지는노래의신</td>
                <td>51</td>
                <td>2023.04.22</td>
              </tr>
              <tr>
                <td>4</td>
                <td>속초 맛집 추천해줄 사람 있나</td>
                <td>쩝쩝박사</td>
                <td>48</td>
                <td>2023.04.21</td>
              </tr>
              <tr>
                <td>3</td>
                <td>콘서트 공지 언제 뜨는 거임?</td>
                <td>케이팝고인물자체</td>
                <td>22</td>
                <td>2023.04.19</td>
              </tr>
              <tr>
                <td>2</td>
                <td>스프링 시작했다~ 스프링 끝났다~</td>
                <td>나자바봐라</td>
                <td>41</td>
                <td>2023.04.01</td>
              </tr>
            </tbody>
          </table>
        </BoardList>
        <BoardBtns>
          <BoardPage>
            <button>
              <img src={more_left} />
            </button>
            <button>
              <img src={left} />
            </button>
            <button>
              <img src={number1} />
            </button>
            <button>
              <img src={number2} />
            </button>
            <button>
              <img src={right} />
            </button>
            <button>
              <img src={more_right} />
            </button>
          </BoardPage>
          <button onClick={() => {naviate("/writer/자유게시판")}}>글쓰기</button>
        </BoardBtns>
      </MainBoard>
    </MainDiv>
  );
};

export default App;
