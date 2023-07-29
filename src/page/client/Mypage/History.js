import React from "react";
import { HistoryWrap } from "./css/History";
import { useRecoilState } from "recoil";
import { inquireAnswerAlertState } from "state/alert/alert_recoil";

const App = () => {

    const [inquireAnswer, setInquireAnswer] = useRecoilState(inquireAnswerAlertState)

    
    return (
        <>
        <HistoryWrap>
            <table className="board">
                <tr className="border_row">
                    <td>신고유형</td>
                    <td className="title">제목</td>
                    <td>누적획수</td>
                    <td>등록일</td>
                    <td>신고일</td>
                    <td style={{textAlign:"center"}}>처리상태</td>
                </tr>

                <tr>
                    <td>욕설/비방</td>
                    <td className="title">대충 게시판에 맞지 않는 욕한 내용</td>
                    <td>2회</td>
                    <td>2023.06.01</td>
                    <td>2023.06.02</td>
                    <td><div className="complete">처리완료</div></td>
                </tr>

                <tr>
                    <td>기타</td>
                    <td className="title">대충 게시판에 맞지 않는 기타 내용</td>
                    <td>1회</td>
                    <td>2023.04.11</td>
                    <td>2023.04.13</td>
                    <td><div className="wait">처리중</div></td>
                </tr>
            </table>


            
        </HistoryWrap>

        <HistoryWrap>
            <table className="commend">
                <tr className="border_row">
                    <td>신고유형</td>
                    <td className="title">내용</td>
                    <td>누적획수</td>
                    <td>등록일</td>
                    <td>신고일</td>
                    <td style={{textAlign:"center"}}>처리상태</td>
                </tr>

                <tr>
                    <td>욕설/비방</td>
                    <td className="title">대충 욕 했다는 내용</td>
                    <td>1회</td>
                    <td>2023.05.27</td>
                    <td>2023.05.28</td>
                    <td><div className="complete">처리완료</div></td>
                </tr>

             
            </table>


            
        </HistoryWrap>

        <HistoryWrap>
            <table className="commend">
                <tr className="border_row">
                    <td>문의내역</td>
                    <td className="title">내용</td>
                    <td></td>

                    <td>등록일</td>
                    <td>답변일</td>

                    <td style={{textAlign:"center"}}>처리상태</td>
                </tr>

                <tr>
                    <td>회원</td>
                    <td className="title">대충 닉네임 바꾸고 싶다는 내용</td>
                    <td></td>

                    <td>2023.05.27</td>
                    <td></td>
                    <td><div className="wait">답변대기</div></td>
                </tr>

                <tr>
                    <td>기타</td>
                    <td className="title" onClick={() => setInquireAnswer(true)}>대충 사용자 제재 좀 해달라는 내용</td>
                    <td></td>

                    <td>2023.06.02</td>
                    <td>2023.05.19</td>
                    <td><div className="complete">답변완료</div></td>
                </tr>
            </table>


            
        </HistoryWrap>


</>
    )
}

export default App;