import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LinkOutlined } from "@ant-design/icons";

const LinkDiv = styled.div`
    position: absolute;
    margin-top: 10px;
    width: 320px;
    background-color: white;
    height: 40px;
    line-height: 40px;
    border: 1px solid lightgray;
    border-radius: 10px;

    display: flex;
    flex-direction: row;

    .name {
        margin-left: 15px;
        margin-right: 20px;
        color: #828282;
    }

    .link {
        cursor: pointer;
        transition: 0.3s;
        color: #828282;
        margin-top: 3px;
        margin-left: 10px;
    }

    .link:hover {
        color: #0085FF;
        filter: drop-shadow(0px 0px 5px lightgray);
    }

    input {
        padding-left: 10px;
        padding-bottom: 5px;
        transition: 0.3s;
        width: 200px;
        color: #828282;
        border: 0px;
        border-bottom: 1px solid #828282;
        outline: 0px;
    }

    input:focus {
        border-bottom: 1px solid #0085FF;
    }

    input::placeholder {
        color: rgba(130, 130, 130, 0.5);
    }
`

const App = ({isClick, setIsClick, parentRef}) => {
    let searchRef = useRef(null);
    let [linkValue, setLinkValue] = useState('');

    useEffect(() => {
        function handleOutside(e) {
          // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
          if (searchRef.current && !searchRef.current.contains(e.target) && !parentRef.current.contains(e.target)) {
            //setIsClick(false);
          }
        }
        document.addEventListener("mouseup", handleOutside);
        return () => {
          document.removeEventListener("mouseup", handleOutside);
        };
      }, [searchRef]);

    return (
        <motion.div initial={{scale: 0}}
            animate={{
                scale: isClick ? 1 : 0
            }}
            ref={searchRef}
        >
            <LinkDiv>
                <div className="name">    
                    링크
                </div>

                <div className="value">
                    <input spellCheck="false" placeholder="ex) http://www.naver.com" value={linkValue} onChange={(e) => { setLinkValue(e.target.value)}}></input>
                </div>

                <div className="link" onMouseDown={(e) => {e.preventDefault()}} onClick={() => {document.execCommand("createLink", false, linkValue)}}>
                    <LinkOutlined/>
                </div>
            </LinkDiv>
        </motion.div>
    )
}

export default App;