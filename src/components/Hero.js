import React, { useState } from 'react'
import styled from 'styled-components';
import useFetch from '../hooks/useFetch'
import OpenModal from './OpenModal';

function Hero() {
    const [selectedUrl,setUrl]=useState(null);
    const {list}=useFetch("images");
    return (
        <Section>
            {selectedUrl && <OpenModal selectedUrl={selectedUrl} setUrl={setUrl} />}
            {list && list.map(item=>{
                return <Wrapper key={item.id} onClick={()=>setUrl(item.url)} >
                    <img src={item.url} alt={item.id} />
                </Wrapper>
            })}
        </Section>
    )
}

const Section = styled.section`
    max-width:1200px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
`;
const Wrapper = styled.article`
    width:300px;
    height:300px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

export default Hero
