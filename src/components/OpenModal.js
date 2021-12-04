import React from 'react'
import styled from 'styled-components'

function OpenModal({selectedUrl,setUrl}) {
    return (
        <Wrapper onClick={()=>setUrl(null)}>
            <img src={selectedUrl} alt="Modal-photos" />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.8);
    img{
        width:50%;
        height:50%;
    }
`;

export default OpenModal
