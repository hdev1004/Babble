import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jwt from "page/client/Board/Main/Function/jwt";
import { loginInfoState } from "state/login/recoil";
import {
  changeNameAlertState,
  commentRemoveAlertState,
  boardRemoveAlertState,
  inquireAnswerAlertState
} from "state/alert/alert_recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { MyPageDiv } from "./css/MyPage";
import MyPageDetail from "./MyPageDetail";
import MyPageProfile from "./MyPageProfile";
import { motion } from "framer-motion";

//Alert
import ChangeNameAlert from "global/alert/ChangeNameAlert";
import CommentRemoveAlert from "global/alert/CommentRemoveAlert";
import BoardRemoveAlert from "global/alert/BoardRemoveAlert";
import InquireAnswerAlert from "global/alert/InquireAnswerAlert"


const App = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
  const [tab, setTab] = useState("profile");

  const [changeName, setChangeName] = useRecoilState(changeNameAlertState);
  const [removeComment, setRemoveCommnet] = useRecoilState(
    commentRemoveAlertState
  );
  const [removeBoard, setRemoveBoard] = useRecoilState(boardRemoveAlertState)
  const [inquireAnswer, setInquireAnswer] = useRecoilState(inquireAnswerAlertState)
  //profile, board, comment, history

  jwt.check_token(loginInfo, setLoginInfo, navigate);

  return (
    <motion.div
      className="body"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0px 0px 20px lightgray",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ChangeNameAlert
        show={changeName}
        setShow={setChangeName}
      ></ChangeNameAlert>
      <BoardRemoveAlert
        show={removeBoard}
        setShow={setRemoveBoard}
      >
      </BoardRemoveAlert>
      <CommentRemoveAlert
        show={removeComment}
        setShow={setRemoveCommnet}
      >
      </CommentRemoveAlert>
      <InquireAnswerAlert
        show={inquireAnswer}
        setShow={setInquireAnswer}
      ></InquireAnswerAlert>
      
      
      <MyPageProfile tab={tab} setTab={setTab}></MyPageProfile>{" "}
      {/* 이게 왼쪽꺼 */}
      <div
        style={{
          height: "100%",
          width: "2px",
          boxShadow: "0px 0px 30px black",
          backgroundColor: "white",
          zIndex: 30,
        }}
      ></div>
      <MyPageDetail tab={tab}></MyPageDetail> {/* 이게 오른쪽꺼 */}
    </motion.div>
  );
};

export default App;
