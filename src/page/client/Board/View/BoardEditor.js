import React, { useEffect, useState } from "react";
import { BoardEditorDiv, BoardInputDiv, BoardReply, BoardWriteDiv } from "./css/BoardEditor";
import Pencil from "images/pencil.png";
import Close from "images/close_white.png";
import { MentionsInput, Mention } from 'react-mentions'
import mentions from "./css/mentions.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as enc from "global/Function/encryption";
import { loginInfoState } from "state/login/recoil";
import { useRecoilValue } from "recoil";

const App = () => {
    const loginInfo = useRecoilValue(loginInfoState);
    const param = useParams();
    const [text, setText] = useState("");
    const users = [{
        id:"알사탕",
        display: "솜사탕너구리"
    }
    ];

    const submit = () => {
        
        let body = {
            board_token: param.board_token,
            target_token: "",
            comment_token: enc.createToken(),
            writer_token: loginInfo.token,
            status: 0,
            comment: text
        }

        axios.post(process.env.REACT_APP_SERVER_URL + "/board/comment/add", body).then((res) => {
            alert("등록되었습니다.");
            setText("");
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <BoardEditorDiv>
            <BoardInputDiv>
                <BoardReply>
                    <div className="text">급식매뉴재첩국</div>
                    <div className="close">
                        <img src={Close}/>
                    </div>
                </BoardReply>
                

                <MentionsInput
                    placeholder="댓글을 입력해 주세요."
                    spellCheck={false}
                    classNames={mentions}
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                    className="mentions"
                    a11ySuggestionsListLabel={"Suggested mentions"}
                >
                    <Mention className={mentions.mentions__mention} data={users} />
                </MentionsInput>

                {//<textarea maxLength={500} placeholder="댓글을 입력해 주세요." value={text} onChange={(e) => {setText(e.target.value)}}></textarea>
}
            </BoardInputDiv>

            <BoardWriteDiv>
                <div className="length">{text.length}/500</div>
                <img className="pencil" onClick={() => {submit()}} src={Pencil}></img>
            </BoardWriteDiv>
        </BoardEditorDiv>
    )
}

export default App;