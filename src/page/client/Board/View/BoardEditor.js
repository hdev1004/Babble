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
import { useRecoilValue, useRecoilState } from "recoil";
import { replyComment } from "state/board/board_recoil";
import defaultMentionStyle from './css/defaultMentionStyle'
import { getCommentList } from "./Function/utils";
import { getFrinedList, getFrinedList_metions } from "../MenuBar/function/utils";
const App = ({commentData, setCommentData}) => {
    const loginInfo = useRecoilValue(loginInfoState);
    const [replyState, setReplyState] = useRecoilState(replyComment);

    const param = useParams();
    const [text, setText] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getFrinedList_metions(setUsers, loginInfo.token);
    }, [])


    const submit = () => {
        let body = {
            board_token: param.board_token,
            target_token: replyState.target_token,
            comment_token: enc.createToken(),
            writer_token: loginInfo.token,
            status: 0,
            comment: text
        }

        axios.post(process.env.REACT_APP_SERVER_URL + "/board/comment/add", body).then((res) => {
            alert("댓글이 등록되었습니다.");
            setReplyState({
                nickname: undefined,
                target_token: undefined,
                writer_token: undefined
            })
            setText("");

            getCommentList(param.board_token, setCommentData);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <BoardEditorDiv>
            <BoardInputDiv>
                {
                    replyState.target_token === undefined ? (
                        <>
                        </>
                    ) : (
                        <BoardReply>
                            <div className="text">{replyState.nickname}</div>
                            <div className="close" onClick={() => {setReplyState({
                                target_token: undefined,
                                writer_token: undefined,
                                nickname: undefined
                            })}}>
                                <img src={Close}/>
                            </div>
                        </BoardReply>
                    )
                }
                

                <MentionsInput
                    placeholder="댓글을 입력해 주세요."
                    spellCheck={false}
                    classNames={mentions}
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                    className="mentions"
                    a11ySuggestionsListLabel={"Suggested mentions"}
                >
                     <Mention
                        markup="{{__id__}}"
                        displayTransform={id => `@${id}`}
                        data={users}
                        onAdd={() => {}}
                        className={mentions.mentions__mention}
                        style={defaultMentionStyle}
                    />
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