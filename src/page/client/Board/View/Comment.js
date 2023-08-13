import React, { useEffect } from "react";
import { CommentBlock, CommentDiv, CommentNickname, CommentNoti, CommentText, CommentTitle } from "./css/BoardComment";
import Account from "images/account.png";
import { Mention, MentionsInput } from "react-mentions";
import mentions from "./css/sub_mentions.module.css";

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
            data.target_token === null ? (
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
    
                
                <MentionsInput
                    disabled
                    placeholder="댓글을 입력해 주세요."
                    spellCheck={false}
                    classNames={mentions}
                    a11ySuggestionsListLabel={"Suggested mentions"}
                    value={data.comment}
                >
                    <Mention className={mentions.mentions__mention} />
                </MentionsInput>
            </CommentBlock>
            ) : (
            <CommentBlock style={{marginLeft: "20px"}}>
               <CommentTitle>
                    <CommentNickname>
                        <div style={{marginRight: "10px"}}>
                            => 
                        </div>
                        <div className="image">
                            <img src={Account}></img>
                        </div>
                        <div className="name">
                            {data.nickname}
                        </div>
                        <div className="date">
                            {transDate(data.reply_upload_date)}
                        </div>
                    </CommentNickname>
    
                    <CommentNoti>
    
                        <div className="right">
                            신고
                        </div>
                    </CommentNoti>
                </CommentTitle>

                <MentionsInput
                    disabled
                    placeholder="댓글을 입력해 주세요."
                    spellCheck={false}
                    classNames={mentions}
                    a11ySuggestionsListLabel={"Suggested mentions"}
                    value={data.reply_comment}
                >
                    <Mention className={mentions.mentions__mention} />
                </MentionsInput>
            </CommentBlock>
            )
        }
        </>
    )
}

export default App;