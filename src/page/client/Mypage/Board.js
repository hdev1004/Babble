import { React, useState } from "react";
import { BoardWrap, BoradTable, BoardPage } from "./css/Board";
import left from "images/left.png";
import right from "images/right.png";
import more_left from "images/more_left.png";
import more_right from "images/more_right.png";
import number1 from "images/number1.png";
import number2 from "images/number2.png";
import BoardRemoveAlert from "global/alert/BoardRemoveAlert";
import { constSelector, useRecoilState, useRecoilValue } from "recoil";
import { boardRemoveAlertState } from "state/alert/alert_recoil";
import { useEffect } from "react";
import axios from "axios";
import { loginInfoState } from "state/login/recoil";
import { PulseLoader } from "react-spinners";

const App = () => {
  // const [isRemove, setIsRemove] = useState(false);

  const loginInfo = useRecoilValue(loginInfoState);
  const [myPostList, setMyPostList] = useState(null);
  const [removeBoard, setRemoveBoard] = useRecoilState(boardRemoveAlertState)

  const getPostList = () => {
    let body =  {
      user_token: "cc7fad93f28f16fd962e4a6b1b799258"
    }
    
    axios.post(process.env.REACT_APP_TEST_URL + "/board/myPost", body).then((res) => {
      let data = res.data.data;
      console.log("DATA : ", res.data.data);
      setMyPostList(data);
    }).catch((err) => {
      console.log("err : ", err);
    })
  }

  useEffect(() => {
    getPostList();
  }, []);

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

          {
            myPostList === null ? (
              <div>
                <PulseLoader color="#0085ff"></PulseLoader>
              </div>
            ) : (
              myPostList?.map((item) => (
                <tr>
                  <td>{item.category}</td>
                  <td className="title">{item.title}</td>
                  <td>{item.likes}</td>
                  <td>{item.upload_date}</td>
                  <td className="btns">
                    <div className="edit" style={{cursor: "pointer"}}>수정</div>
                    <div
                      style={{
                        cursor: "pointer"
                      }}
                      className="remove"
                      onClick={() => {
                        setRemoveBoard(true);
                      }}
                    >
                      삭제
                    </div>
                  </td>
                </tr>
              ))
            )
           
          }
          
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
