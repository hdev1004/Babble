import React, { useEffect, useState } from "react";
import { CommentBlock, CommentDiv, CommentNickname, CommentNoti, CommentText, CommentTitle } from "./css/BoardComment";
import Account from "images/account.png";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const App = () => {
    const param = useParams();
    let [commentData, setCommentData] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + "/board/comment/" + param.board_token).then((res) => {
            console.log(res.data.data);
            setCommentData(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <CommentDiv>
            {
                commentData === null ? (
                    <PulseLoader color="#0085ff" speedMultiplier={0.85} size={10}/>
                ) : commentData.map((item) => (
                    <Comment data={item}></Comment>      
            ))
        }
            
        </CommentDiv>
    )
}

export default App;