import React from "react";


export default function Editor(){
    return(
        <div>
            <h3>code Editor</h3>
            <iframe src="https://react-code-editor-six.vercel.app/" 
                style={{width:'1360px',height:'550px'}} scrolling='no'>
            </iframe>
        </div>
    )
}