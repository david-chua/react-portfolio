import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  height: 150px;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;

  @media(max-width: 1000px){
    flex-direction: column;
    border-bottom: none;
    height: inherit;
  }
`;

const LogoContainer = styled.div`
  @media(max-width: 1000px){
    border-bottom: 2px solid #063A7C;
    text-align: center;
  }

`;

const NavLinksContainer = styled.div`
  width: 80%;
  display:flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 30px;


  @media (max-width: 1000px){
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding-right: 0;
  }
`;

const NavLinkContainer = styled.div`
  padding: 0px 20px;


  @media( max-width: 1000px){
    padding: 0px 0px;
  }

`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #063A7C;
  font-size: 1.4em;
  padding: 20px 30px;


  &.active{
    color: #FFF;
    background: #063A7C;
    border-radius: 50px;
    /* transform: skewx(20deg) */
  }

  @media (max-width: 1200px){
    font-size: 1.3em;
  }
  @media (max-width: 1000px){
    width: 100%;
    border-bottom: 2px solid #063A7C;
    &.active{
      width: 100%;
      color: #FFF;
      border-radius: 0px;
      background: #063A7C;
    }
  }

  @media(max-width: 768px){
    padding: 20px 0;
  }
`;

const LogoImg = styled.img`
  height: 120px;
  padding: 20px 0px 20px 40px;
  margin-bottom: 30px;

  @media (max-width: 1000px){
    padding: 20px 0px;
    margin-bottom: 0px;
  }
`;


const NavBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <NavLink to="/">
          <LogoImg alt="underground" src={require("./../Assets/Images/logo_sm.png")} />
        </NavLink>
      </LogoContainer>

      <NavLinksContainer>
        <NavLinks exact to="/">
          <NavLinkContainer>
           Home
          </NavLinkContainer>
        </NavLinks>
        <NavLinks exact to="/about">
          <NavLinkContainer>
            About
          </NavLinkContainer>
        </NavLinks>
        <NavLinks exact to="/projects">
          <NavLinkContainer>
            Projects
           </NavLinkContainer>
        </NavLinks>

        <NavLinks exact to="/contact">
          <NavLinkContainer>
            Contact
          </NavLinkContainer>
        </NavLinks>
      </NavLinksContainer>
    </NavContainer>
  )
}

export default NavBar;
