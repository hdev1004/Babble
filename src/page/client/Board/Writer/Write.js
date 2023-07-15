import React, { useEffect, useRef, useState } from "react";
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html";
import { SketchPicker, BlockPicker } from 'react-color';
import { EditorBabble, EditorDiv, EditorIcon, MenuAlign, WriteDiv, WriteForm, WriteMenu, WriteTitle } from "./css/Write";
import Editor from "./Editor";
import { CustomButton, EditButton, FontSize, LineButton, PicktureButton } from "./Button";

import Babble from "images/babble.png";
import Picture from "images/picture.png";
import Link from "images/link.png";
import Line from "images/line.png";
import { BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined, EditOutlined } from "@ant-design/icons";

const App = () => {
    const [html, setHtml] = useState("");
    const [color, setColor] = useState("#D9E3F0");
    //document.execCommand('foreColor', false, "rgba(255,0,255,0.5)");

    const command = () => {
        
    }

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

                    <MenuAlign>
                        <div className="picture">
                            <PicktureButton img={Picture} name="사진"></PicktureButton>
                            <PicktureButton img={Link} name="링크"></PicktureButton>
                            <PicktureButton img={Line} name="구분선"></PicktureButton>
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

                            <EditorIcon>
                                <EditOutlined/>
                            </EditorIcon>
                            {/*<EditButton cmd="italic" name="이탈릭"></EditButton>*/}

                            <LineButton name="구분선"></LineButton>
                            <CustomButton name="커스텀"></CustomButton>
                            <div style={{marginTop: "30px", display: "none"}}>
                                <BlockPicker color={color} onChangeComplete={(c) => {setColor(c.hex)}}/>
                            </div>
                        </div>

                        
                        <div className="line"> <div></div> </div>

                        <div className="align">
                        <div className="custom">
                            <EditButton cmd="bold" name="굵게"></EditButton>
                            <EditButton cmd="italic" name="이탈릭"></EditButton>
                            <LineButton name="구분선"></LineButton>
                            <CustomButton name="커스텀"></CustomButton>
                            <div style={{marginTop: "30px", display: "none"}}>
                                <BlockPicker color={color} onChangeComplete={(c) => {setColor(c.hex)}}/>
                            </div>
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