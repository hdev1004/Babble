// eslint-disable-next-line jsx-a11y/alt-text
import React, { useEffect, useState } from "react";
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

import { useRecoilValue } from "recoil";
import { loginInfoState } from "state/login/recoil";
import { PulseLoader } from "react-spinners";
import { getBoardKindList, getBoardList } from "./Function/board_utils";
import axios from "axios";

const App = ({ board }) => {
  const [isBtnHover, setIsBtnHover] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const naviate = useNavigate();
  const loginInfo = useRecoilValue(loginInfoState);
  const [boardList, setBoardList] = useState(null);
  const pageBtn = [0,0,0,0,0];

  const [totalCount, setTotalCount] = useState(0); // 전체 페이지 수
  const [unit, setUnit] = useState(10);
  const [page, setPage] = useState(1); // 선택한 페이지 버튼


  
  
    /*
    // 이전
    const PreviousePage = () => {
      if(activeBtn > 1) {
        setActiveBtn(activeBtn - 1)
      }
    };


    // 다음
    const nextPage = () => {
      if(activeBtn < TestTotalpageNum) {
        setActiveBtn(activeBtn + 1)
      }
    }*/

  useEffect(() => {
    getBoardList(board.board_kind, page, unit, setBoardList);
  }, [board])

  useEffect(() => {
    // console.log(boardList);
  }, [boardList])

 
  const transDate = (date) => {
    let timestamp = new Date(date);
    let year = timestamp.getFullYear().toString();
    let month = (timestamp.getMonth() + 1).toString().padStart(2, "0");
    let days = timestamp.getDate().toString().padStart(2, "0");
    
     return year + "." + month + "." + days;
  }


  const keyPress = (e) => {
    if(e.key === "Enter") {
      searchTitle()
    }
  }

  const searchTitle =() => {
    axios.get(process.env.REACT_APP_TEST_URL + `/board/search/${searchInput}`).then((res) =>{
      let data = res.data.data;
      console.log('Data2 : ' ,data);

      setBoardList(data);
 
      
    })
  }
  

  return (
    // <div>
    //   Board {type}
    // </div>

    <MainDiv>
      <MainHeader>
        <BoardTitle>
          <div>{board.name}</div>
        </BoardTitle>
        <SearchForm>
          <input value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} onKeyUp={keyPress} placeholder="검색어를 입력해 주세요" />
          <button
            onMouseOver={() => {
              setIsBtnHover(true);
            }}
            onMouseOut={() => {
              setIsBtnHover(false);
            }}
          >
            <img src={isBtnHover ? search_white : search} onClick={searchTitle}/>
          </button>
        </SearchForm>
        <BoradTotal>
          <p>총 9개</p>
        </BoradTotal>
      </MainHeader>
      <MainBoard>
        <BoardList>
          
          {
            boardList !== null ? (
              <table>
                <thead>
                  <tr>
                    <td className="num">번호</td>
                    <td className="title">제목</td>
                    <td className="writer">글쓴이</td>
                    <td className="likes">좋아요</td>
                    <td className="uplaod">등록일</td>
                  </tr>
                </thead>
                
                <tbody>
                  <tr className="noti">
                    <td>안내</td>
                    <td className="title">개인 정보에 관련하여 포스팅 및 언급 금지입니다.</td>
                    <td>관리자</td>
                    <td>54</td>
                    <td>2023.03.05</td>
                  </tr>

                  {
                    boardList.map((item, index) => (
                      <tr key = {index}>
                        <td>{index + 1}</td>
                        <td className="title" onClick={() => {naviate(`/board/${item.name}/${item.board_token}`)}}>{item.title}</td>
                        <td>{item.nickname}</td>
                        <td>{item.likes}</td>
                        <td>{transDate(item.upload_date)}</td>
                      </tr>
                    ))
                  }
                
                </tbody>
              </table>
            ) : (
              <div style={{width: "100%", height:"50px", lineHeight: "50px", textAlign: "center"}}>
                <PulseLoader color="#0085ff"></PulseLoader>
              </div>
            )
          }
         


         
        </BoardList>
        <BoardBtns>
          <BoardPage>
            <button>
              <img src={more_left} />
            </button>
            <button>
              <img src={left} />
            </button>

            <button className="activeNumber">1</button>
            <button className="number">2</button>
            <button className="number">3</button>
            <button>
              <img src={right} />
            </button>
            <button>
              <img src={more_right} />
            </button>
          </BoardPage>
          <button onClick={() => {naviate("/writer/" + board.name)}}>글쓰기</button>
        </BoardBtns>
      </MainBoard>
    </MainDiv>
  );
};

export default App;
