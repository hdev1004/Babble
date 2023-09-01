import React, { useEffect, useRef } from "react";
import { AlertDiv, AlertImg, AlertText, AlertTitle } from "./css/Alert";
import { motion } from "framer-motion";
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
          width: "822px",
          height: "822px",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px #828282",
          //   position: "relative",
        }}
        animate={{ y: "103px", scale: props.show ? 1 : 0 }}
      >
        <AlertText style={{padding:"38px"}}>
            <div style={{ color: "#0085ff",fontSize: "30px", fontWeight: "700",textAlign: "left"}}>1 : 1 문의내역</div>
            <div style={{ marginTop: "20px",fontSize: "16px", color: "#2f2f2f",fontWeight: "700", textAlign: "left"}}>
            ㆍ 1 : 1 문의에 등록된 내용은 질문자 본인만 확인할 수 있습니다.<br></br>
                    ㆍ 문의하신 내용에 대한 답변은 마이페이지 &gt; 이력 관리에서 확인할 수 있습니다.<br></br>
                    ㆍ 임시점검 및 공휴일의 경우 답변이 늦어질 수 있으니 양해 부탁드립니다.
            </div>
            <hr></hr>
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
             
              }}
              onClick={closeBtn}
            >
              목록
            </button>
            
          </div>
        </AlertText>
      </motion.div>
    </AlertDiv>
  );
};

export default App;
