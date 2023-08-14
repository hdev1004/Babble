import React, { useEffect, useState } from "react";
import { CommentBlock, CommentDiv, CommentNickname, CommentNoti, CommentText, CommentTitle } from "./css/BoardComment";
import Account from "images/account.png";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { getCommentList } from "./Function/getComment";

const App = ({commentData, setCommentData}) => {
    const param = useParams();

    useEffect(() => {
       getCommentList(param.board_token, setCommentData);
    }, []);

    return (
        <CommentDiv>
            {
                commentData === null ? (
                    <PulseLoader color="#0085ff" speedMultiplier={0.85} size={10}/>
                ) : commentData.length === 0 ? (
                    <div style={{textAlign: "center"}}>
                        작성된 댓글이 없습니다. <br></br>
                        첫 댓글을 작성해 볼까요? 🤔
                    </div>
                ) : commentData.map((item) => (
                    <Comment data={item}></Comment>      
            ))
        }
            
        </CommentDiv>
    )
}

export default App;