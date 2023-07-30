import React from "react";
import { CommentBlock, CommentDiv, CommentNickname, CommentNoti, CommentText, CommentTitle } from "./css/BoardComment";
import Account from "images/account.png";

const App = ({data}) => {
    const transDate = (data) => {
        let date = new Date(data);
        let year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
    
        let hour = date.getHours().toString().padStart(2, "0");
        let min = date.getMinutes().toString().padStart(2, "0");
        return year + "." + month + "." + day + " " + hour + ":" + min;
    }

    //type 0 : 댓글
    //type 1 : 대댓글
    return (
        <>
        {
            data.status === 0 ? (
                <CommentBlock>
                <CommentTitle>
                    <CommentNickname>
                        <div className="image">
                            <img src={Account}></img>
                        </div>
                        <div className="name">
                            {data.nickname}
                        </div>
                        <div className="date">
                            {transDate(data.upload_date)}
                        </div>
                    </CommentNickname>
    
                    <CommentNoti>
                        <div className="left">
                            대댓글
                        </div>
    
                        <div className="right">
                            신고
                        </div>
                    </CommentNoti>
                </CommentTitle>
    
                
                <CommentText>
                    {
                        data.comment
                    }
                </CommentText>
            </CommentBlock>
            ) : (
            <CommentBlock style={{marginLeft: "20px"}}>
                <CommentTitle>
                    <CommentNickname>
                        <span>=></span>
                        <div>
                            누가계속농구하래
                        </div>
                        <div>
                            2023.04.28 19:02
                        </div>
                    </CommentNickname>

                    <CommentNoti>
                        <div>
                            신고
                        </div>
                    </CommentNoti>
                </CommentTitle>

                
                <CommentText>
                    <div style={{marginLeft:"15px"}}></div>
                    <div>그래 빨리 나와봐라</div>
                </CommentText>
            </CommentBlock>
            )
        }
        </>
    )
}

export default App;