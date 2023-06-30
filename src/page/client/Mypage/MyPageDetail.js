import React from "react";
import { DetailDiv } from "./css/MyPageDetail";
import Profile from "./Profile";
import Board from "./Board";
import Comment from "./Comment";
import History from "./History";
import NotFound from "./NotFound";

const App = ({tab}) => {
    return (
        <DetailDiv>{
                tab === "profile" ? <Profile></Profile> :
                tab === "board" ? <Board></Board> :
                tab === "comment" ? <Comment></Comment> :
                tab === "history" ? <History></History> : <NotFound></NotFound>
            }
        </DetailDiv>
    )
}

export default App;
