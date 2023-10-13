import axios from "axios"

export const getBoardKindList = (setData) => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/board/kind").then((res) => {
        let data = res.data.data;
        setData(data);
    }).catch((err) => {
        console.log(err);
    })
}

export const getBoardList = (kind, page, unit, setData) => {
    axios.get(process.env.REACT_APP_SERVER_URL + `/board/list/${kind}/${page}/${unit}`).then((res) => {
        let data = res.data.data;
        setData(data);
    }).catch((err) => {
        console.log(err);
    })
}
