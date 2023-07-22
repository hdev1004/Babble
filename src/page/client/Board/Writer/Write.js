import React, { useEffect, useRef, useState } from "react";
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html";
import { SketchPicker, BlockPicker } from 'react-color';
import { ColorPick, EditorBabble, EditorDiv, EditorIcon, MenuAlign, WriteDiv, WriteForm, WriteMenu, WriteTitle } from "./css/Write";
import Editor from "./Editor";
import { CustomButton, EditButton, FontColor, FontSize, LineButton, PicktureButton } from "./Button";
import { motion } from "framer-motion";

import Babble from "images/babble.png";
import Picture from "images/picture.png";
import Link from "images/link.png";
import Line from "images/line.png";

import { BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined, EditOutlined, AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined } from "@ant-design/icons";

const App = () => {
    const [html, setHtml] = useState("");
    //document.execCommand('foreColor', false, "rgba(255,0,255,0.5)");
    

    const command = () => {
        
    }

    //굵게, 이탈릭, 밑줄, 취소선
    const onMouseDown = (evt, cmd, arg) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(cmd, false, arg); // Send the command to the browser
    }

    return (
        <WriteDiv>
            <WriteTitle>
                <WriteMenu>

                    <EditorBabble>
                        <img src={Babble}></img>
                    </EditorBabble>

                    <MenuAlign onMouseDown={(e) => {
                    }}>
                        <div className="picture">
                            <PicktureButton img={Picture} name="사진"></PicktureButton>
                            <PicktureButton img={Link} name="링크">
                                
                            </PicktureButton>
                            <PicktureButton img={Line} name="구분선" cmd="hr"></PicktureButton>
                        </div>

                        <div className="line"> <div></div> </div>

                        <div className="custom">
                            <FontSize></FontSize>
                            <EditorIcon onMouseDown={(evt) => {onMouseDown(evt, "bold")}}>
                                <BoldOutlined/>
                            </EditorIcon>
                           
                            <EditorIcon onMouseDown={(evt) => {onMouseDown(evt, "italic")}}>
                                <ItalicOutlined/>
                            </EditorIcon>
                            
                            <EditorIcon onMouseDown={(evt) => {onMouseDown(evt, "underline")}}>
                                <UnderlineOutlined/>
                            </EditorIcon>
                            
                            <EditorIcon onMouseDown={(evt) => {onMouseDown(evt, "strikethrough")}}>
                                <StrikethroughOutlined/>
                            </EditorIcon>

                           <FontColor></FontColor>
                        </div>

                        
                        <div className="line"> <div></div> </div>

                        <div className="align">
                        <div className="custom">
                            <EditorIcon>
                                <AlignLeftOutlined onMouseDown={(evt) => {onMouseDown(evt, "justifyLeft")}}/>
                            </EditorIcon>

                            <EditorIcon>
                                <AlignCenterOutlined onMouseDown={(evt) => {onMouseDown(evt, "justifyCenter")}}/>
                            </EditorIcon>
                            
                            <EditorIcon>
                                <AlignRightOutlined onMouseDown={(evt) => {onMouseDown(evt, "justifyRight")}}/>
                            </EditorIcon>
                        </div>
                        </div>
                    </MenuAlign>
                   
                   
                    
                </WriteMenu>
                
            </WriteTitle>

           <EditorDiv>
                <Editor html={html} setHtml={setHtml}/>
           </EditorDiv>
        </WriteDiv>
    )
}

export default App;