import React from "react";

import { BoardForm, BoardTable } from "./css/Board";

const App = () => {
  return (
    <BoardForm>
      <BoardTable>
        <table>
          <thead>
            <tr>
              <td>카테고리</td>
              <td>제목</td>
              <td>좋아요</td>
              <td>등록일</td>
              <td>관리</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>자유</td>
              <td>마루라이팅의 끝은 어디까지일까...</td>
              <td>46</td>
              <td>2023.04.28</td>
              <td>
                <button className="edit_btn">수정</button>
                <button className="remove_btn">삭제</button>
              </td>
            </tr>
            <tr>
              <td>자유</td>
              <td>춘배마루팝업스토어 오픈런 후기글</td>
              <td>3342</td>
              <td>2023.07.03</td>
              <td>
                <button className="edit_btn">수정</button>
                <button className="remove_btn">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </BoardTable>
    </BoardForm>
  );
};

export default App;
