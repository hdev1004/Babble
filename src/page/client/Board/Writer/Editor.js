import React from "react";
import { EditorDiv, EditorForm, EditorLine, EditorTitle, EditorBtn, RegistrationBtn, CancelBtn, Placehodler } from "./css/Editor";

const App = ({html, setHtml}) => {
    
    const submit = () => {
        console.log("--- HTML ---");
        console.log(html)
    }

    const handleChange = (e) => {
        setHtml(e.target.innerHTML);
     }
 
     function escapeHtml(text) {
         const entityMap = {
           '&': '&amp;',
           '<': '&lt;',
           '>': '&gt;',
           '"': '&quot;',
           "'": '&#39;',
           '/': '&#x2F;',
           ' ': '&nbsp;'
         };
       
         return text.replace(/[&<>"' \/]/g, (match) => entityMap[match]);
       }
 
    function textToHtml(text) {
        const lines = text.split('\n'); // 텍스트를 줄 단위로 분할
        
        // 각 줄을 <p> 태그로 감싸주고 줄 바꿈 문자를 <br> 태그로 변환
        const htmlLines = lines.map(line => line.trim() === '' ? `<div><br/></div>` : `<div>${escapeHtml(line)}</div>`);
        
        // 줄 단위로 변환된 HTML을 합쳐서 하나의 문자열로 반환
        return htmlLines.join('');
    }
 
     const handlePaste = (e) => {
        e.preventDefault();
        const clipboardData = e.clipboardData || window.clipboardData;
        const text = clipboardData.getData('text/plain');
        const html = clipboardData.getData('text/html');

        console.log(text, html);
        console.log(html.trim() === '');
        if(html.trim() === '') {
            document.execCommand("insertHTML", false, `<div>${textToHtml(text)}</div>`); 
        } else {
            document.execCommand("insertHTML", false, `<div>${html}</div>`); 
        }
        //document.execCommand("insertHTML", false, textToHtml(text));
        
    }
 
     const sanitizeConf = {
         allowedTags: ["b", "i", "em", "strong", "a", "p", "div", "hr"],
         allowedAttributes: { a: ["href"] }
     };
 
     const sanitize = () => {
         //let data = sanitizeHtml("<div>안녕하세요</div><p>흐이이잉</p><e>e태그에요</e>", sanitizeConf);
         console.log("HTML : ", html);
         //console.log("DATA : ", data);
     };
     

    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
            <EditorTitle>
                <select className="category">
                    <option disabled>카테고리 선택</option>
                    <option>자유게시판</option>
                    <option>후엥게시판</option>
                    <option>우웩게시판</option>
                    <option>개발게시판</option>
                    <option>공포게시판</option>
                </select>

                <div className="title">
                    <input placeholder="제목을 입력해주세요"></input>
                </div>
                <EditorLine></EditorLine>
                
                {
                    html.trim() === '' ? (
                        <Placehodler>
                        <div>* 게시판 용도와 무관하거나 아래의 내용이 포함된 경우 사전 안내없이 삭제됩니다. </div>
                        <br/>
                        <div>- 욕설, 차별, 혐오, 비방글 등 타인의 명예를 훼손하는 게시글</div>
                        <div>- 개인정보 노출이 있거나 거래를 시도하는 게시글</div>
                        <div>- 범죄, 불법촬영물 등 법령을 위반하는 게시글</div>
                        <div>- 정치 및 사회에 관련된 게시글</div>
                    </Placehodler>
                    ) : (
                        <></>
                    )
                }
            </EditorTitle>

            <EditorForm
                spellCheck={false}
                contentEditable={true}
                disabled={false}
                onInput={handleChange}
                onPaste={handlePaste}
                tagName="pre"
            >
            </EditorForm>

            <EditorBtn>
                <RegistrationBtn onClick={submit}>등록</RegistrationBtn>
                <CancelBtn>취소</CancelBtn>
            </EditorBtn>
        </div>
       
            
    )
}

export default App;