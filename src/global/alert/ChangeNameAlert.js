import React, { useEffect, useRef } from "react";
import { AlertDiv, AlertImg, AlertText, AlertTitle } from "./css/Alert";
import { motion } from "framer-motion";
import Close from "images/close.png";
import Change from "images/change.png";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
          zIndex: "500",
          borderRadius: "15px",
          width: "612px",
          height: "253px",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px #828282",
          position: "relative",
        }}
        animate={{ y: "103px", scale: props.show ? 1 : 0 }}
      >
        <AlertTitle>
          <img src={Close} onClick={closeBtn}></img>
        </AlertTitle>

        <AlertImg>
          <img src={Change}></img>
        </AlertImg>

        <AlertText>
          <div style={{ fontSize: "20px", lineHeight: "30px" }}>
            닉네임을{" "}
            <span style={{ color: "#0085FF", fontWeight: "bold" }}>
              범규진짜강아지
            </span>{" "}
            에서
          </div>
          <div style={{ fontSize: "20px", lineHeight: "35px" }}>
            <input
              placeholder="새로운 닉네임"
              spellCheck="false"
              style={{
                fontSize: "20px",
                height: "30px",
                width: "190px",
                borderRight: "0px",
                borderTop: "0px",
                borderLeft: "0px",
                textAlign: "center",
                outline: "none",
                color: "#0085FF",
                fontWeight: "bold",
              }}
            ></input>{" "}
            로 변경할까요?
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
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
              변경
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
