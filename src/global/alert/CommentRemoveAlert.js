import React, { useEffect, useRef } from "react";
import { AlertDiv, AlertImg, AlertText, AlertTitle } from "./css/Alert";
import { motion } from "framer-motion";
import remove from "images/remove.png";
import Close from "images/close.png";

const App = (props) => {
  let searchRef = useRef(null);

  const closeBtn = () => {
    props.setShow(false);
  };

  useEffect(() => {
    function handleOutside(e) {
      // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        props.setShow(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [searchRef]);

  return (
    <AlertDiv show={props.show}>
      <motion.div
        ref={searchRef}
        style={{
          borderRadius: "15px",
          width: "612px",
          height: "268px",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px #828282",
          //   position: "relative",
        }}
        animate={{ y: "103px", scale: props.show ? 1 : 0 }}
      >
        <AlertTitle>
          <img src={Close} onClick={closeBtn}></img>
        </AlertTitle>

        <AlertImg>
          <img src={remove}></img>
        </AlertImg>

        <AlertText>
          <div style={{ fontSize: "20px" }}>총 2건의 댓글을 삭제할까요?</div>
          <div style={{ marginTop: "20px", color: "#828282" }}>
            삭제한 댓글은 되돌릴 수 없습니다.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <button
              style={{
                width: "121px",
                height: "45px",
                fontSize: "1.125rem",
                background: "#0085FF",
                border: "none",
                borderRadius: "30px",
                color: "#FFFFFF",
                marginRight: "20px",
              }}
            >
              삭제
            </button>
            <button
              style={{
                width: "121px",
                height: "45px",
                fontSize: "1.125rem",
                background: "#FFFFFF",
                border: "1px solid #0085FF",
                borderRadius: "30px",
                color: "#0085FF",
              }}
              onClick={closeBtn}
            >
              취소
            </button>
          </div>
        </AlertText>
      </motion.div>
    </AlertDiv>
  );
};

export default App;
