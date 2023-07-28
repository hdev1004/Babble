import { React, useState } from "react";
import {
  CommendRecord,
  CommendRecordBox,
  CommentWrap,
  ContentsInner,
  DeleteBtn,
} from "./css/Comment";
import profile_base from "../../../images/profile_base.png";
import { useRecoilState } from "recoil";
import { commentRemoveAlertState } from "state/alert/alert_recoil";

const App = () => {
  const [removeComment, setRemoveCommnet] = useRecoilState(
    commentRemoveAlertState
  );

  return (
    <>
      <CommentWrap>
        <span>
          전체 댓글 <span className="count">3</span>
        </span>
        <ContentsInner>
          <input type="checkbox" />
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
          onClick={() => {
            setRemoveCommnet(true);
          }}
        >
          삭제
        </DeleteBtn>
      </CommentWrap>
    </>
  );
};

export default App;
