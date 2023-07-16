import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { Align, FontForm, FontList, PicktureBtn, StyleBtn } from "./css/Button";
import ArrowImg from "images/down-arrow.png";
import { EditorIcon } from "./css/Write";
import { EditOutlined } from "@ant-design/icons";
import { BlockPicker } from "react-color";
import LinkModal from "./Link";

export const CustomButton = (props) => {
    return (
        <StyleBtn
            key={"line"}
            onMouseDown={evt => {
                evt.preventDefault();
                document.execCommand("insertHTML", false, "<div style='color:lightblue'>이건 그냥 추가해요</div>")
            }}
        >
            {props.name || props.cmd}

        </StyleBtn>
    )
}

export const LineButton = (props) => {
    return (
        <StyleBtn
            key={"line"}
            onMouseDown={evt => {
                evt.preventDefault();
                document.execCommand("insertHorizontalRule")
            }}
        >
            {props.name || props.cmd}

        </StyleBtn>
    )
}

export const EditButton= (props) =>  {

    return (
      <StyleBtn
        key={props.cmd}
        onMouseDown={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
          
        }}
      >
        {props.name || props.cmd}
      </StyleBtn>
    );
}


export const PicktureButton = (props) => {
    const [isClick, setIsClick] = useState(false);

    return (
        <Align>
            <PicktureBtn onClick={() => {setIsClick(!isClick)}} onMouseDown={(evt) => {
                evt.preventDefault(); 
                props.cmd === "hr" ? document.execCommand("insertHTML", false, "<img class='line'></img>") : console.log("HR")
                }}>
                <img src={props.img}></img>
                <div className="text">
                    {props.name}
                </div>
            </PicktureBtn>

            {
                props.name === "링크"  ? (
                    <LinkModal isClick={isClick} setIsClick={setIsClick}></LinkModal>
                ) : (
                    <></>
                )           
            }
            
        </Align>
        
    )
}

export const FontSize = (props) => {
    const [click, setClick] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    let searchRef = useRef(null);
    
    useEffect(() => {
        function handleOutside(e) {
            // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setClick(false);
            }
          }
          document.addEventListener("mouseup", handleOutside);
          return () => {
            document.removeEventListener("mouseup", handleOutside);
          };
    }, [searchRef])

    const handlerSize = (size) => {
        setFontSize(size);
        setClick(false);

        const selection = window.getSelection(); // 현재 선택된 텍스트 선택 객체 가져오기
        const range = selection.getRangeAt(0); // 선택 영역의 범위 가져오기
        const selectedHTML = range.cloneContents(); // 선택된 HTML 요소 가져오기
        const div = document.createElement('div');
        div.appendChild(selectedHTML);
        const changeSizeTag = div.innerHTML.replace(/<span style="font-size.+">|<\/span>/g, "");
        const addTag = `<span style="font-size: ${size}px">${changeSizeTag}</span>`

        // 선택된 텍스트와 HTML 요소를 사용하거나 반환하면 됩니다.
        document.execCommand("insertHTML", false, addTag)
    }

    return (
        <Align style={{position: "relative"}} ref={searchRef}>
            <motion.div
                style={{marginRight: "20px"}}
                onMouseDown={(e) => {e.preventDefault(); setClick(!click);}}
                whileTap={{ scale: 0.97 }}
            >
                <FontForm click={click}>
                    <div className="num">{fontSize}</div>
                    <div className="down">
                        <img src={ArrowImg}>
                        </img>
                    </div>
                </FontForm>
            </motion.div>

            <motion.div 
                initial={{
                    zIndex: 100,
                    scale: 0
                }}
                animate={{
                scale: click ? 1 : 0
            }}>
                <FontList>
                    <div onClick={() => {handlerSize(11)}}>11</div>
                    <div onClick={() => {handlerSize(13)}}>13</div>
                    <div onClick={() => {handlerSize(15)}}>15</div>
                    <div onClick={() => {handlerSize(16)}}>16</div>
                    <div onClick={() => {handlerSize(19)}}>19</div>
                    <div onClick={() => {handlerSize(24)}}>24</div>
                    <div onClick={() => {handlerSize(28)}}>28</div>
                    <div onClick={() => {handlerSize(30)}}>30</div>
                    <div onClick={() => {handlerSize(34)}}>34</div>
                    <div onClick={() => {handlerSize(38)}}>38</div>
                </FontList>
            </motion.div>
           
        </Align>
    )
}

export const FontColor = () => {
    const [color, setColor] = useState("#555");
    const [isColor, setIsColor] = useState(false);
    let searchRef = useRef(null);
    
    useEffect(() => {
        function handleOutside(e) {
            // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
            if (searchRef.current && !searchRef.current.contains(e.target)) {
              setIsColor(false);
            }
          }
          document.addEventListener("mouseup", handleOutside);
          return () => {
            document.removeEventListener("mouseup", handleOutside);
          };
    }, [searchRef])

    return (
        <EditorIcon ref={searchRef} onMouseDown={(evt) => {evt.preventDefault();}}>
            <EditOutlined onClick={() => {setIsColor(!isColor)}}/>
    
            <motion.div
                initial={{
                    zIndex: 100,
                    scale: 0
                }}
                animate={{
                    scale: isColor ? 1 : 0
                }} 
                style={{
                    position: "absolute",
                    top: 88,
                    left: -75
                }}>
                <BlockPicker color={color} onChangeComplete={(c) => {setColor(c.hex); document.execCommand("foreColor", false, c.hex);}}/>
            </motion.div>
        </EditorIcon>

    )
}