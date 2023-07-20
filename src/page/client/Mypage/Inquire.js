import React from "react";
import { InquireBack, InquireWrap, inquireBtn } from "./css/Inquire";
import { useNavigate } from "react-router-dom";

const Inquire = () => {
    let navigate = useNavigate();
    const moveHandle = () => {
        navigate(-1);
    }

    return (
        <InquireBack>
            <InquireWrap>
                <h3>1 : 1 문의하기</h3>
                <p className="inquire_content">
                    ㆍ 1 : 1 문의에 등록된 내용은 질문자 본인만 확인할 수 있습니다.<br></br>
                    ㆍ 문의하신 내용에 대한 답변은 마이페이지 &gt; 이력 관리에서 확인할 수 있습니다.<br></br>
                    ㆍ 임시점검 및 공휴일의 경우 답변이 늦어질 수 있으니 양해 부탁드립니다.
                </p>

                <hr />

                <div className="inquire_writetitle">
                    <div style={{lineHeight: "40px"}}>제목</div>
                    <input placeholder="제목을 입력해 주세요."></input>

                    <div style={{lineHeight: "40px"}} className="inquire_select">문의종류</div>
                    <select className="category">
                        <option disabled>종류 선택</option>
                        <option>회원</option>
                        <option>채팅</option>
                        <option>친구</option>
                        <option>게시판 생성</option>
                        <option>게시물/댓글</option>
                        <option>개인정보</option>
                        <option>ID/PW</option>
                        <option>기타</option>
                    </select>
                </div>

                <div className="inquire_writecontent">
                    <div>내용</div>
                    <textarea placeholder="문의 내용을 입력해 주세요." cols="95" rows="7"></textarea>
                </div>

                <hr />

                <inquireBtn>
                    <div className="Btn_section">
                        <div className="back" onClick={()=>{moveHandle()}}>취 소</div>
                        <div className="inquire">문 의</div>
                    </div>
                </inquireBtn>
            </InquireWrap>
        </InquireBack>
    )
}

export default Inquire;