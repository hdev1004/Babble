import React from "react";
import Menu from "page/client/Board/MenuBar/Menu";
import { BoardDiv } from "./css/ClientMainBoard";

const App = () => {
    return (
        <BoardDiv>
            <Menu></Menu>
            
            <div style={{width: "100%"}}>
                Board
            </div>
        </BoardDiv>
    )
}

export default App;