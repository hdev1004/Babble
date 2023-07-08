import axios from "axios";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "noSQL/firebase";

export const makeCalendar = (year, month) => {
    let beforeDate = new Date(year, month, 0);
    let currentDate = new Date(year, month, 1);
    let afterDate = new Date(year, month + 1, 0);
    
    let startDate = currentDate.getDay();
    let dateArr = []; 
    
    let firstWeek = [];
    let midWeek = [];
    let lastWeek = [];

    let day = 1;

    let disabledColor = "#828282";
    let activeColor = "#000";
    let saturdayColor = "#1263CE";
    let sundayColor = "#CE1117";
    let weekColor = [
        sundayColor,
        activeColor,
        activeColor,
        activeColor,
        activeColor,
        activeColor,
        saturdayColor
    ];

    for(let i = 0; i < startDate; i ++) {
        firstWeek.push({
            day:beforeDate.getDate() - startDate + i + 1,
            color: disabledColor
        } );
    }
    
    for(let i = startDate; i < 7; i ++) {
        let compareDate = new Date(year, month, day).getDay();

        firstWeek.push({
            day: day,
            color: weekColor[compareDate]
        });
        day += 1;
    }
    dateArr.push(firstWeek);
    
    let trigger = false;
    for(let i = firstWeek[6].day + 1; i <= afterDate.getDate(); i ++) {
        let compareDate = new Date(year, month, i).getDay();
        trigger = false;
        midWeek.push({
            day:i,
            color: weekColor[compareDate]
        });

        if(midWeek.length === 7) {
            trigger = true;
            dateArr.push(midWeek);
            midWeek = [];
        }
    }

    day = 1;
    if(trigger) { //마지막까지 꽉꽉 채웠을 때
    } else { //아닐때
        for(let i = midWeek.length; i < 7; i ++) {
            midWeek.push({
                day:day,
                color: disabledColor
            });
            day += 1;
        }
        dateArr.push(midWeek);
    }

    if(dateArr.length !== 6) {
        for(let i = day; i < day + 7; i ++) {
                lastWeek.push({
                day:i,
                color:disabledColor
            });
        }
        dateArr.push(lastWeek);
    }
    return dateArr;
}

/**
 * 친구 목록 가져오는 함수
 * @param {*} friend 
 * @param {*} setFrind 
 * @param {*} token 
 */
export const getFrinedList = (setData, token) => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/friend/list/" + token).then((res) => {
      setData(res.data.data);
    }).catch((err) => {
      alert("오류가 발생했습니다.");
    })
}

export const getFriendRequest = (setData, token) => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/friend/request/" + token).then((res) => {
        setData(res.data.data);
      }).catch((err) => {
        alert("오류가 발생했습니다.");
      })
}

export const getFriendRequestSend = (setData, token) => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/friend/request/send/" + token).then((res) => {
        setData(res.data.data);
      }).catch((err) => {
        alert("오류가 발생했습니다.");
      })
}


/**
 * 사용자 리스트 가져오는 함수
 * @param {*} setUserList 
 * @param {*} name 
 * @param {*} token 
 */
export const getUserList = (setUserList, name, token) => {
    axios.get(process.env.REACT_APP_SERVER_URL + `/user/list/${name}/${token}`).then((res) => {
      let data = res.data.data;
      setUserList(data);
    }).catch((err) => {
      alert("오류가 발생했습니다.");
    })
  }


/**
 * 친구 추가 
 * @param {*} token 사용자 토큰
 * @param {*} friend_token 추가하고하 하는 친구 토큰
 */
export const frinedAdd = (token, friend_token, rendering) => {
    let body = {
        token: token,
        friend_token: friend_token
    }

    axios.post(process.env.REACT_APP_SERVER_URL + `/friend/add`, body).then((res) => {
        alert("친구추가 되었습니다");
        rendering();
    }).catch((err) => {
        alert("오류가 발생했습니다.");
    })
}

export const frinedReq = (token, friend_token, rendering) => {
    let body = {
        token: token,
        friend_token: friend_token
    }
    
    axios.post(process.env.REACT_APP_SERVER_URL + `/friend/request`, body).then(async (res) => {
        alert("친구요청이 되었습니다.");
        rendering();

        let docRef = doc(db, "FriendReq", friend_token);
        let docSnap = await getDoc(docRef);
        let data = docSnap.exists() ? docSnap.data().token : [];

        data.push({
            token
        })

        await setDoc(doc(db, "FriendReq", friend_token), {
            token: data
        });
          
    }).catch((err) => {
        alert("오류가 발생했습니다. Base 102");
        console.log(err);
    })
}

/**
 * 친구 요청 거부
 * @param {*} token 
 * @param {*} friend_token 
 * @param {*} rendering 
 * @returns 
 */
export const friendRefuse = (token, friend_token, rendering) => {
    let body = {
        token: token,
        friend_token: friend_token
    }
    if (!window.confirm("친구 요청을 거부하시겠습니까?")) {
        return;
    }

    axios.delete(process.env.REACT_APP_SERVER_URL + `/friend/refuse`, {data:body}).then((res) => {
        alert("친구 요청을 거부했습니다.");
        rendering();

    }).catch((err) => {
        alert("오류가 발생했습니다.");
    })
}

/**
 * 친구 삭제
 * @param {*} token 
 * @param {*} friend_token 
 * @param {*} rendering 
 * @returns 
 */
export const friendDel = (token, friend_token, rendering) => {
    let body = {
        token: token,
        friend_token: friend_token
    }

    if (!window.confirm("친구를 삭제하시겠습니까?")) {
        return;
    }

    axios.delete(process.env.REACT_APP_SERVER_URL + `/friend`, {data:body}).then((res) => {
        alert("친구를 삭제했습니다.");
        rendering();
    }).catch((err) => {
        alert("오류가 발생했습니다.");
    })
}

/**
 * 친구 요청 취소
 * @param {*} token 
 * @param {*} friend_token 
 * @param {*} rendering 
 * @returns 
 */
export const friendCancle = (token, friend_token, rendering) => {
    let body = {
        token: token,
        friend_token: friend_token
    }
    console.log("BODY : ", body);

    if (!window.confirm("친구 요청을 취소하시겠습니까?")) {
        return;
    }

    axios.delete(process.env.REACT_APP_SERVER_URL + `/friend/request`, {data: body}).then(async (res) => {
        alert("친구 요청을 취소했습니다.");
        rendering();

        const docRef = doc(db, "FriendReq", friend_token);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let data = docSnap.data().token;
            data = data.filter((prev) => prev.token !== token)

            setDoc(doc(db, "FriendReq", friend_token), {
                token: data
            })
        } else {
            alert("오류가 발생했습니다. Base 101")
        }

    }).catch((err) => {
        alert("오류가 발생했습니다.");
        console.log(err);
    })
}

/**
 * 데이터 형식 변경
 * @param {*} data 
 * @returns 
 */
export const transDate = (data) => {
    let date = new Date(data);
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours().toString();
    let min = date.getMinutes().toString();
    return month + "." + day + " " + hour + ":" + min;
}