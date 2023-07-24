import { React, useState } from "react";
import {
  CommendRecord,
  CommendRecordBox,
  CommentWrap,
  ContentsInner,
  DeleteBtn,
} from "./css/Comment";
import profile_base from "../../../images/profile_base.png";
import CommentRemoveAlert from "global/alert/CommentRemoveAlert";

const App = () => {
  const [isRemove, setIsRemove] = useState(false);
  const [checkedList, setCheckedList] = useState([]); //체크된 댓글들
  const [isChekced, setIsChecked] = useState(false); //체크된 상태

  const checkedHandler = () => {
    setIsChecked(true);
    setCheckedList([]);
  };

  return (
    <>
      <CommentWrap>
        <CommentRemoveAlert
          show={isRemove}
          setShow={setIsRemove}
        ></CommentRemoveAlert>
        <span>
          전체 댓글 <span className="count">3</span>
        </span>
        <ContentsInner>
          <input type="checkbox" onClick={checkedHandler} />
          <img src={profile_base} alt="프로필 이미지" />
          <CommendRecordBox>
            <div className="title">
              <span className="title_info">[자유] 술도녀 강지구 너무 좋아</span>
              <span> 2023.04.22</span>
            </div>
            <div className="content">
              <p>나 강지구 머리스타일 좋음 손민수 각</p>
            </div>
          </CommendRecordBox>
        </ContentsInner>

        <ContentsInner>
          <input type="checkbox" />
          <img src={profile_base} alt="프로필 이미지" />
          <CommendRecordBox>
            <div className="title">
              <span className="title_info">
                [덕질] 미라지콘 동행 있는 사람?
              </span>
              <span> 2023.03.26</span>
            </div>
            <div className="content">
              <p>동행 없으면 혼자 가도 괜찮던데 차피 연석 아니니까</p>
            </div>
          </CommendRecordBox>
        </ContentsInner>

        {/* 대댓글 */}
        <ContentsInner>
          <input type="checkbox" />
          <img src={profile_base} alt="프로필 이미지" />
          <CommendRecordBox>
            <div className="title">
              <span className="title_info">[덕질] 원중 가고 싶다</span>
              <span> 2023.03.14</span>
            </div>
            <div className="content">
              <p className="re_commend">나 강지구 머리스타일 좋음 손민수 각</p>
              <p>전영중 졸라 멋있어!</p>
            </div>
          </CommendRecordBox>
        </ContentsInner>

        <DeleteBtn
          onClick={(checkedList) => {
            setIsRemove(true);
          }}
        >
          삭제
        </DeleteBtn>
      </CommentWrap>
    </>
  );
};

export default App;
