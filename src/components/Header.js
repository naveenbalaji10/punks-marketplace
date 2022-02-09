import React from 'react';
import styled from 'styled-components';
import header from '../assets/header/cryptopunk-logo.png'
import SearchIcon from '../assets/header/search.png'
import Theme from '../assets/header/theme-switch.png'


const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:100px;
color:#fff;
`

const ImgContainer = styled.div`
width:200px;
margin:20px;
`

const Img = styled.img`
height:100%;
width:100%;`

const SearchContainer = styled.div`
display:flex;
align-items:center;
flex:1;
background-color:#444;
height:40px;
border-radius:15px;
margin:40px;
`

const IconContainer = styled.div`
margin:10px;`

const Icon = styled.img``

const SearchInput = styled.input`
background-color:transparent;
border:none;
width:100%;
color:#fff;
outline:none;
font-size:16px;
`

const LinkContainer = styled.div`
margin: 20px;
display:flex;
align-items:center;
`


const Link = styled.a`
margin:20px;
text-decoration:none;
cursor:pointer;

&:hover{
    color:#52b788;
}
`

const ModeContainer = styled.div`
display:flex;
align-items:center;
margin:20px;
`

const Mode = styled.div`
display:flex;
background-color:#1c1c1e;
border-radius:50px;
padding:15px;
justify-content:center;
align-items:center;
`
const ModeImg = styled.img`
height:25px;
`

const HeaderButton = styled.button`
width:100px;
padding:15px;
background-color #7cffcb;
background-image linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);
border:none;
border-radius:20px;
color:#000;
font-size:16px;
margin:20px;

&:hover{
    background-color: #3bb78f;
    background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
    color:#f6f6f6;
}
`


const Header = () => {
    return <Container>
        <ImgContainer>
            <Img src={header} />
        </ImgContainer>

        <SearchContainer>
            <IconContainer>
                <Icon src={SearchIcon} />
            </IconContainer>
            <SearchInput />
        </SearchContainer>

        <LinkContainer>
            <Link>Drops</Link>
            <Link>Marketplace</Link>
            <Link>Create</Link>
        </LinkContainer>

        <ModeContainer>
            <Mode>
                <ModeImg src={Theme} />
            </Mode>
        </ModeContainer>

        <HeaderButton>GET IN</HeaderButton>

    </Container>;
};

export default Header;
