import React from 'react';
import CollectionCard from './CollectionCard';
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
margin:0 20px;
padding: 20px 0;
border-bottom:1px solid #e9ecef;
overflow:scroll;

::-webkit-scrollbar{
display:none;
}
`


const PunkList = ({ punkListData, setSelectedPunk }) => {
    return <Container>
        {
            punkListData.map((punk) => (
                <div onClick={() => setSelectedPunk(punk.token_id)} key={punk.token_id}>
                    <CollectionCard id={punk.token_id} img={punk.image_url} name={punk.name} traits={punk.traits} />
                </div>
            ))
        }
    </Container>;
};

export default PunkList;
