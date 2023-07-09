import axios from "axios"

export const getBoardKindList = (setData) => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/board/list").then((res) => {
        let data = res.data.data;
        setData(data);
    }).catch((err) => {
        console.log(err);
    })
}