import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { BabbleTitle, BoardViewDiv, BoardViewForm, InfoGroup, LikeGroup, Post, TitleGroup } from "./css/BoardView";
import Babble from "images/babble.png";
import Comment from "images/comment.png";
import BoardComment from "./BoardComment";

const App = () => {
    let [boardInfo, setBoardInfo] = useState(null); 
    let {board_token} = useParams();
    let [likeClick, setLikeClick] = useState(false);
    let naviate = useNavigate();

    function decodeHtml(text) {
        const decodeEntityMap = {
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#39;': "'",
          '&#x2F;': '/',
          '&nbsp;': ' '
        };
      
        return text.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;|&#x2F;|&nbsp;)/g, (match) => decodeEntityMap[match]);
    }

    const transDate = (timestamp) => {
        let date = new Date(timestamp);
        let year = date.getFullYear().toString().padStart(2, "0");
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let days = date.getDate().toString().padStart(2, "0");

        let Hour = date.getHours().toString().padStart(2, "0");
        let Min = date.getMinutes().toString().padStart(2, "0");

        return `${year}.${month}.${days} ${Hour}:${Min}`
    }
      
    
    const getHtml = () => {
        axios.get(process.env.REACT_APP_SERVER_URL + "/board/" + board_token).then((res) => {
            let data = res.data.data[0];
            console.log(data);
            setBoardInfo(data);
        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        getHtml();
    }, [])

    return (
        <BoardViewDiv>
            <BabbleTitle>
                <img onClick={() => {naviate("/board")}} src={Babble}></img>
            </BabbleTitle>

            {
                boardInfo === null || boardInfo === undefined ? (
                    <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "40px"}}>
                        <PulseLoader color="#0085ff"></PulseLoader>
                    </div>
                ) : (
                    <BoardViewForm>

                        <TitleGroup>
                            <div className="category">{boardInfo.name}</div>
                            <div className="title">{boardInfo.title}</div>
                        </TitleGroup>

                        <div className="line"></div>

                        <InfoGroup>
                            <div className="nickname"><b>작성자</b>&nbsp;&nbsp;&nbsp;{boardInfo.nickname}</div>
                            <div className="upload"><b>등록일</b>&nbsp;&nbsp;&nbsp;{transDate(boardInfo.upload_date)}</div>
                        </InfoGroup>

                        <div className="line"></div>

                        <Post dangerouslySetInnerHTML={{__html: decodeHtml(boardInfo.post)}}></Post>

                        <LikeGroup>
                            <div className="content">
                                <span className={likeClick ? "heart active" : "heart"} onClick={()=>{setLikeClick(!likeClick)}}></span>
                                <span className={likeClick ? "num active" : "num"}>{boardInfo.likes}</span>
                            </div>
                            <div className="comment">
                                <img src={Comment}></img>
                                <div className="num">0</div>
                            </div>
                        </LikeGroup>

                        <br/>
                        <div className="line"></div>
                        <br/>

                        <BoardComment></BoardComment>
                    </BoardViewForm>
                )
            }
        </BoardViewDiv>
        
    )
}

export default App;