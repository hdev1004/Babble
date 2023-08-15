import axios from "axios";

export const getCommentList = (board_token, setData) => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/board/comment/" + board_token).then((res) => {
        let data = res.data.data;
        let result = [];
        let dupStr = undefined;
        data.map((item) => {
            if(item.target_token === null) { //일반 댓글
                result.push(item);
            } else { //일반 댓글, 대댓글 분류
                if(dupStr === item.comment) { //대댓글
                    result.push(item)
                } else { //일반 댓글
                    result.push({
                        ...item,
                        target_token: null 
                    })
                    result.push(item)
                }
                dupStr = item.comment;
            }
        })

        setData(result);
    }).catch((err) => {
        console.log(err);
    })
}

export const addBoardLike = (board_token, user_token, setData) => {
    let data = {
        board_token: board_token,
        user_token: user_token
    }
    
    axios.post(process.env.REACT_APP_SERVER_URL + "/board/add/like", data).then((res) => {  
        checkBoardLike(board_token, user_token, setData);
    }).catch((err) => {
        console.log(err);
    })
}

export const cancelBoardLike = (board_token, user_token, setData) => {
    let data = {
        board_token: board_token,
        user_token: user_token
    }
    
    axios.post(process.env.REACT_APP_SERVER_URL + "/board/cancel/like", data).then((res) => {  
        checkBoardLike(board_token, user_token, setData);
    }).catch((err) => {
        console.log(err);
    })
}

export const checkBoardLike = (board_token, user_token, setData) => {
    let data = {
        board_token: board_token,
        user_token: user_token
    }
    
    axios.post(process.env.REACT_APP_SERVER_URL + "/board/check/like", data).then((res) => {  
        let result = res.data.data;
        setData(result)
    }).catch((err) => {
        console.log(err);
    })
}