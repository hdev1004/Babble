import React from "react";
import { RegisterDiv, RegisterForm, RegisterTitle, RegisterBody} from "./css/registerCss";

const App = () => {

    return (
        <RegisterDiv>
            <RegisterForm>
                <RegisterTitle>
                    babble
                </RegisterTitle>

                <RegisterBody>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div>
                            아이디
                        </div>

                        <div>
                            아이디를 입력해 주세요.
                        </div>
                    </div>
                </RegisterBody>
            </RegisterForm>
        </RegisterDiv>
    )
}

export default App;