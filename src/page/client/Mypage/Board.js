import React from "react";
import { BoardWrap, BoradTable, BoardPage } from "./css/Board";
import left from "images/left.png";
import right from "images/right.png";
import more_left from "images/more_left.png";
import more_right from "images/more_right.png";
import number1 from "images/number1.png";
import number2 from "images/number2.png";

const App = () => {
  return (
    <BoardWrap>
      <BoradTable>
        <table className="board">
          <tr className="border_row">
            <td>카테고리</td>
            <td className="title">제목</td>
            <td>좋아요</td>
            <td>등록일</td>
            <td>관리</td>
          </tr>

          <tr>
            <td>자유</td>
            <td className="title">춘배마루팝업스토어 오픈런 후기글</td>
            <td>3342</td>
            <td>2023.07.03</td>
            <td className="btns">
              <div className="edit">수정</div>
              <div className="remove">삭제</div>
            </td>
          </tr>
          <tr>
            <td>자유</td>
            <td className="title">마루라이팅의 끝은 어디까지일까...</td>
            <td>46</td>
            <td>2023.04.28</td>
            <td className="btns">
              <div className="edit">수정</div>
              <div className="remove">삭제</div>
            </td>
          </tr>
        </table>
      </BoradTable>
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
    </BoardWrap>
  );
};

export default App;
