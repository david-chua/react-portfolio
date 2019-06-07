import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './home.css';

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
`;

const HomeImg = styled.img`
  height: 100%;
  width: 100%;
`;

const Logo = styled.img`
  width: 20%
  padding-top: 10px
`;

const ImageContainer = styled.div`
  height: 100vh;
  width: 50%;
  max-width: 1000px;
  background: #000;
  object-fit: fill;
  background-size: inherit;
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 30%;
  display: block;
  padding-top: 3%;
`;

const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20%;
`;

const LinkDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 0 40px 0;
  font-size: 5em;

  &:hover{
    background: grey;
    color: #fff;
    font-size: 7em;
  }
`;


const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-family: "Gill Sans MT";
`;


const Home = () => {
  return(
    <HomeContainer>
        <ImageContainer>
          <HomeImg className="homeImg" alt="underground" src={require("./../Assets/Images/underground.png")} />
        </ImageContainer>
        <InfoContainer>
          <LogoContainer>
            <NavLink to="/"><Logo alt="logo" src={require("./../Assets/Images/logo_transparent.png")} /></NavLink>
          </LogoContainer>
          <LinkContainer>
            <StyledLink to="/about" className="who">
              <LinkDiv>
                Who
              </LinkDiv>
            </StyledLink>
            <StyledLink to="/projects" className="what">
              <LinkDiv>
                What
              </LinkDiv>
            </StyledLink>
            <StyledLink to="/experience" className="where">
              <LinkDiv>
                Where
              </LinkDiv>
            </StyledLink>
          </LinkContainer>
        </InfoContainer>
    </HomeContainer>
  )
}


export default Home;
