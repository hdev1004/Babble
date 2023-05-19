import React from "react";
import { useRecoilState } from "recoil";
import { loginInfoState } from "state/login/recoil";

const ClientLogin = () => {

    const [loginState, setLoginState] = useRecoilState(loginInfoState);


    return (
        <div>
            <div>
                Client Login Page
            </div>

            <div>
                id : {loginState.id}
            </div>

            <div>
                pw : {loginState.pw}
            </div>
        </div>
    )
}

export default ClientLogin;