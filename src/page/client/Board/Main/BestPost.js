import React from "react";
import Bell from "images/bell.png";
import { BestPostForm, BestPostTitle, IconAndTitle } from "./css/BestPost";

const App = () => {
    return (
        <BestPostForm>
            <BestPostTitle>
                <IconAndTitle>
                    <img src={Bell}></img>
                    <div>BEST 게시판</div>
                </IconAndTitle>
            </BestPostTitle>
        </BestPostForm>
    )
}

export default App;