import React from "react";
import { CommentBlock, CommentDiv, CommentNickname, CommentNoti, CommentText, CommentTitle } from "./css/BoardComment";

const App = () => {

    return (
        <CommentDiv>
            <CommentBlock>
                <CommentTitle>
                    <CommentNickname>
                        <div>
                            급식메뉴재첩국
                        </div>
                        <div>
                            2023.04.28 19:00
                        </div>
                    </CommentNickname>

                    <CommentNoti>
                        <div>
                            대댓글
                        </div>

                        <div>
                            신고
                        </div>
                    </CommentNoti>
                </CommentTitle>

                
                <CommentText>
                    일요일 웹툰 증겨찾기에 가비지 타임 없는 사람 있음?
                </CommentText>
            </CommentBlock>
            
            
            <CommentBlock style={{marginLeft: "20px"}}>
                <CommentTitle>
                    <CommentNickname>
                        <span>=></span>
                        <div>
                            22급식메뉴재첩국22
                        </div>
                        <div>
                            2023.04.28 19:00
                        </div>
                    </CommentNickname>

                    <CommentNoti>

                        <div>
                            신고
                        </div>
                    </CommentNoti>
                </CommentTitle>

                
                <CommentText>
                    일요일 웹툰 증겨찾기에 가비지 타임 없는 사람 있음?
                </CommentText>
            </CommentBlock>
            
        </CommentDiv>
    )
}

export default App;