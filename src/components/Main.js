import React from 'react';
import styled from 'styled-components';

import owner from '../assets/owner/punkhead.png'
import check from '../assets/owner/check.png'

import instagram from '../assets/owner/instagram.png'
import twitter from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'
import { useEffect, useState } from 'react/cjs/react.development';

const MainContainer = styled.div`
display:flex;
align-items:center;
height:350px;
margin:20px;
`

const MainImgContainer = styled.div`
margin:20px;
height:100%;
width:350px;
`

const MainImg = styled.img`
width:100%;
height:100%;
border-radius:20px;`

const MainDetails = styled.div`
height:100%;
flex:1;
display:flex;
flex-direction:column;
`

const TitleContainer = styled.div`
display:flex;
height:80%;
align-items:flex-start;
`

const Title = styled.h1`
color:#fff;
font-size:60px;
`

const Id = styled.h4`
color:#a1a5b0;
font-size:50px;
margin-left:40px;
margin-top:10px;
`

const OwnerContainer = styled.div`
display:flex;
height:30%;
align-items:center;
`
const InnerContainer = styled.div`
display:flex;
flex:1;
align-items:center;
`

const ImgContainer = styled.div`
height:50px;
`

const OwnerImg = styled.img`
height:100%;
border-radius:50%;
`

const OwnerDetails = styled.div`
margin:20px;
`

const OwnerAdd = styled.p`
color:#fff;
font-weight:500;
`

const OwnerName = styled.p`
color:#77E4D4;
margin-top:5px;`

const SocialContainer = styled.div`
display:flex;
align-items:center;
margin-right:20px;
`

const IconContainer = styled.div`
height:70px;
width:70px;
margin-right:20px;
border-radius:50%;
border: 1px solid white;
`

const Icon = styled.img`
height:100%;
width:100%;
padding:5px;
`

const Main = ({ punkListData, selectedPunk }) => {

    const [activePunk, setActivePunk] = useState(punkListData[0])
    console.log(selectedPunk)

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    return <>
        <MainContainer>
            <MainImgContainer>
                <MainImg src={activePunk.image_url} />
            </MainImgContainer>
            <MainDetails>
                <TitleContainer>
                    <Title>{activePunk.name}</Title>
                    <Id>.#{activePunk.token_id}</Id>
                </TitleContainer>
                <OwnerContainer>
                    <InnerContainer>

                        <ImgContainer>
                            <OwnerImg src={activePunk.owner.profile_img_url} />
                        </ImgContainer>
                        <OwnerDetails>
                            <OwnerAdd>{activePunk.owner.address}</OwnerAdd>
                            <OwnerName>@coder6244</OwnerName>
                        </OwnerDetails>
                    </InnerContainer>

                    <SocialContainer>
                        <IconContainer>
                            <Icon src={instagram} />
                        </IconContainer>
                        <IconContainer>
                            <Icon src={twitter} />
                        </IconContainer>
                        <IconContainer>
                            <Icon src={more} />
                        </IconContainer>
                    </SocialContainer>

                </OwnerContainer>
            </MainDetails>
        </MainContainer>
    </>;
};

export default Main;
