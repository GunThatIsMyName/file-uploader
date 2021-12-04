import React, { useState } from 'react'
import ProgressBar from './SetprogresBar';

function FileUpload() {
    const [file,setFile]=useState(null);
    const [message,setMessage]=useState(null);

    const types = ["image/png","image/jpeg"];

    const handlerChange =(e)=>{
        let selected = e.target.files[0];
        // ****  types.includes(selected.type ***
        if(selected && types.includes(selected.type) ){
            // selected && selected.type=== types[0] || types[1]
            setFile(selected);
            setMessage(`${selected.name}  File uploaded successfully`);
        }else{
            setFile(null);
            setMessage("File formatter does not matche")
        }
    }

    return (
        <form  >
            <input type="file" onChange={handlerChange} />
            <div className="output">
                {message && <h1>{message}</h1> }
                {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default FileUpload
