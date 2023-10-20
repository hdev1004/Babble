import React, { useEffect, useState } from "react";
import Bell from "images/bell.png";
import Account from "images/account.png";
import { BestPostForm, BestPostTitle, IconAndTitle, BestNotice, BestPostList, PostRow, LIkeAComent } from "./css/BestPost";
import { throttle } from "lodash";

const App = () => {
    const [resize, setResize] = useState(window.innerWidth);
    const triggerWidth = 1600;

    const handleResize = throttle(() => {
        setResize(window.innerWidth);
    }, 200);

    useEffect(() => {
        handleResize();
        
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <BestPostForm resize={resize} triggerWidth={triggerWidth} className={resize >= triggerWidth ? "show" : "hidden"}>
            <BestPostTitle>
                <IconAndTitle>
                    <img src={Bell}></img>
                    <div>BEST 게시판</div>
                </IconAndTitle>
            </BestPostTitle>
            <BestNotice>
                <div className="BNotice">좋아요를 50개 이상 받은 게시물만 보여집니다.</div>
            </BestNotice>
            
            <BestPostList>
                <PostRow>
                    <div className="BP_kind">자유게시판</div>
                    <div className="BP_title">술도녀 강지구 너무 좋아</div>
                    <div className="BP_content">예전부터 판다였고 이번에 술도녀 나온다 해서 엄청 기대했음. 술도녀 또 나오면 재밌을 것 같...</div>
                    <LIkeAComent>
                        <img src={Account} className="Like"></img>
                        <div className="LikeBtn">51</div>
                    </LIkeAComent>
                    <LIkeAComent>
                        <img src={Account} className="Coment"></img>
                        <div className="ComentCnt">14</div>
                    </LIkeAComent>
                </PostRow>
                <PostRow>
                    <div className="BP_kind">자유게시판</div>
                    <div className="BP_title">달밤에 피에 미친 폭주 누계농 ㅈㄱㄴ2</div>
                    <div className="BP_content">일요일 가비지타임 진짜 재밌는데... 다들 봐주면 참 좋겠는데.. 수동적으로 요구하기 시작했다</div>
                    <LIkeAComent>
                        <img src={Account} className="Like"></img>
                        <div className="LikeBtn">51</div>
                    </LIkeAComent>
                    <LIkeAComent>
                        <img src={Account} className="Coment"></img>
                        <div className="ComentCnt">14</div>
                    </LIkeAComent>
                </PostRow>
            </BestPostList>
        </BestPostForm>
    )
}

export default App;