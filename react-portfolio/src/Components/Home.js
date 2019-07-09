import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './home.css';

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  text-align: center;

  @media (max-width: 800px){
    flex-direction: column;
  }
`;

const HomeImg = styled.img`
  height: 100%;
  width: 100%;
`;

const Logo = styled.img`
  width: 30%
  padding-top: 10px

  @media (max-width: 1200px){
    width: 40%;
  }

  @media (max-width: 800px){
    width: 30%;
  }
`;

const ImageContainer = styled.div`
  height: 100vh;
  min-height: 1000px;
  width: 50%;
  background: #000;
  object-fit: fill;
  background-size: inherit;

  @media (max-width: 800px){
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px){
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 30%;
  display: block;
  padding-top: 3%;

  @media (max-width: 1200px){
    height: 20%;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20%;

  @media (max-width: 800px){
    margin-top: 10%;
    margin-bottom: 100px;
  }
`;

const LinkDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 0 40px 0;
  font-size: 5em;

  &:hover{
    background: #063A7C;
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
            <StyledLink to="/about" className="homewho">
              <LinkDiv>
                Who
              </LinkDiv>
            </StyledLink>
            <StyledLink to="/projects" className="homewhat">
              <LinkDiv>
                What
              </LinkDiv>
            </StyledLink>
            <StyledLink to="/experience" className="homewhere">
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
