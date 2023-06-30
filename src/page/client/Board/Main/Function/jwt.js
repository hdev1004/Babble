
import axios from "axios";

export const check_token = (loginState, setLoginState, naviate, setLoading) => {
    if(Object.keys(loginState).length !== 5) {
        alert("오류가 발생했습니다. 로그인 화면으로 이동합니다. (0001)");
        naviate("/");
        return;
    }

    axios.get(process.env.REACT_APP_TEST_URL + "/login/jwt/token/" + loginState.token, {
        headers: {
            Authorization: loginState.access_token
        }
    }).then((res) => {
        let token_valid = res.data;
        if(token_valid.refresh_token) { //Refresh Token 유효 시 Access 검사
            if(!token_valid.access_token) { //Accesss Token 만료 시 
                axios.post(process.env.REACT_APP_TEST_URL + "/login/jwt/token", {
                    token: loginState.token
                }, {
                    headers: {
                        Authorization: loginState.access_token
                    }
                }).then((res2) => { 
                    console.log("TOKEN GENERRATE");
                    setLoginState({
                        ...loginState,
                        access_token: res2.data.data
                    })
                }).catch((err2) => {
                    console.log("ERROR");
                    console.log(err2);
                    alert("오류가 발생했습니다. 로그인 화면으로 이동합니다. (0001)");
                    naviate("/");
                })
            } else {
                console.log("access token valid");
            }
        } else {
            alert("세션이 만료되었습니다. 로그인 화면으로 이동합니다. (0002)");
            naviate("/");
        }
    }).catch((err) => {
        alert("오류가 발생했습니다. 로그인 화면으로 이동합니다. (0003)");
        naviate("/");
    });
}