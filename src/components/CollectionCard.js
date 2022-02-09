import React from 'react';
import styled from 'styled-components';


import weth from '../assets/weth.png'

const OuterContainer = styled.div`
min-width:300px;
height:500px;
color:white;
margin-right:30px;
border-radius:20px;
background-color:#1a1c1e;
`



const Image = styled.img`
width:100%;
border-radius:20px;
`

const Container = styled.div`
margin:20px;
`

const Details = styled.h4`
font-size:24px;
font-weight:900;
margin-top:20px;
`
const Details1 = styled.p`
color:#a1a5b0;
font-weight:600;
`

const PriceContainer = styled.div`
display:flex;
align-items:center;
margin-top:20px;
`

const WethImg = styled.img`
width:15px;
height:25px;`

const Price = styled.p`
font-weight:600;
font-size:#fff;
margin-left:10px;
;`

const CollectionCard = ({ id, img, name, traits }) => {
    return <OuterContainer>
        <Image src={img} />
        <Container>

            <Details>{name}</Details>
            <Details1>.#{id}</Details1>
            <PriceContainer>
                <WethImg src={weth} />
                <Price>{traits[0]?.value}</Price>
            </PriceContainer>
        </Container>
    </OuterContainer>;
};

export default CollectionCard;
