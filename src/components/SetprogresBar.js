import React, { useEffect } from "react";
import styled from "styled-components";
import useStorage from "../hooks/useStorage";
function ProgressBar({ file, setFile }) {
  
  const { url, progress } = useStorage(file);

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])

  return <Wrapper width={progress}></Wrapper>;
}

const Wrapper = styled.section`
  height: 5px;
  background: teal;
  margin:20px auto;
  width: ${(props) => props.width}%;
`;

export default ProgressBar;
