import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const App = () => {
    let [html, setHtml] = useState('');
    let {board_token} = useParams();

    function decodeHtml(text) {
        const decodeEntityMap = {
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#39;': "'",
          '&#x2F;': '/',
          '&nbsp;': ' '
        };
      
        return text.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;|&#x2F;|&nbsp;)/g, (match) => decodeEntityMap[match]);
      }
      
    
    const getHtml = () => {
        axios.get(process.env.REACT_APP_SERVER_URL + "/board/" + board_token).then((res) => {
            let data = res.data.data[0];
            setHtml(decodeHtml(data.post));
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        console.log(html);
    }, [html])

    useEffect(() => {
        getHtml();
    }, [])

    return (
        <>
            <div>View</div>

            <div dangerouslySetInnerHTML={{__html: html}}>
            </div>
        </>
        
    )
}

export default App;