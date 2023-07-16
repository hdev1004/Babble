import React from "react";
import { EditorDiv, EditorForm, EditorLine, EditorTitle } from "./css/Editor";

const App = ({html, setHtml}) => {
    
    const handleChange = (e) => {
        setHtml(e.target.value);
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
            </EditorTitle>

            <EditorForm
                spellCheck={false}
                contentEditable={true}
                disabled={false}
                onChange={handleChange}
                onPaste={handlePaste}
                tagName="pre"
            />
        </div>
       
            
    )
}

export default App;