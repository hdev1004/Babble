import React from "react";
import Menu from "page/client/Board/MenuBar/Menu";
import { BoardDiv, BestPostForm, BestPostTitle, IconAndTitle } from "./css/ClientMainBoard";
import Bell from "images/bell.png";

const App = () => {
    return (
        <BoardDiv>  
            <Menu></Menu>          
            <BestPostForm>
                    <BestPostTitle>
                        <IconAndTitle>
                            <img src={Bell}></img>
                            <div>BEST 게시판</div>
                        </IconAndTitle>
                    </BestPostTitle>
                </BestPostForm>
        </BoardDiv>
    )
}

export default App;