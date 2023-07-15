import React, { useState } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { Align, FontForm, FontList, PicktureBtn, StyleBtn } from "./css/Button";
import ArrowImg from "images/down-arrow.png";

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
    return (
        <Align>
            <PicktureBtn>
                <img src={props.img}></img>
                <div className="text">
                    {props.name}
                </div>
            </PicktureBtn>
        </Align>
        
    )
}

export const FontSize = (props) => {
    const [click, setClick] = useState(false);
    const [fontSize, setFontSize] = useState(15);

    const handlerSize = (size) => {
        setFontSize(size);
        setClick(false);
        console.log(size);

        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const startContainer = range.startContainer.parentElement;
        
        console.log(startContainer);
    }

    return (
        <Align style={{position: "relative"}}>
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