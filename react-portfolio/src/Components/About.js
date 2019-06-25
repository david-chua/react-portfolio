import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import smoke from './../Assets/Images/smoke_bg.jpg';

const AboutContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;


  h1{
    text-align: center;
  }

  @media(max-width: 1000px){
    flex-direction: column;
    background: none;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 3%;


  @media(max-width: 1000px){
    width: 100%;
  }
`;

const AboutImg = styled.img`
  width: 90%;
  align-items: center;
`;

const AboutInfoDiv = styled.div`
  width: 50%;
  height: 100%;
  font-family: "Gill Sans MT";
  color: #F5F4E9;
  background: url(${smoke});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media(max-width: 1000px){
    width: 90%;
    color: black;
  }
`;


const AboutInfo = styled.div`
  width: 50%;
  font-family: "Gill Sans MT";
  margin: 30% auto;
  color: white;

  & h1{
    text-align: center;

    & span{
      color: #80A4ED;
      font-size: 1.7em;
    }
  }

  & h3{
    text-align: center;
    font-size: 1.3em;
    & span{
      color: #80A4ED;
      font-size: 1.8em;
    }
  }

  @media(max-width: 1000px){
    width: 100%;
    margin: 10% auto;

  }
`;



class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }



  render(){
    return(
      <div>
        <NavBar />
        <AboutContainer>
          <ImageContainer>
            <AboutImg src={require("./../Assets/Images/aboutme.png")} />
          </ImageContainer>
          <AboutInfoDiv>
            <AboutInfo>
              <h1> Hi, my name is <span> David Chua </span> </h1>
              <h2> I'm a full stack software developer with a love for all things React </h2>
              <h2> My passion with programming comes from idea that I can create anything I want with just the letters in my keyboard</h2>
              <h3> <span> Games</span> maybe, <span>Web Apps</span> or even...</h3>
              <h3><span>...Voice apps</span> are all within my fingertips,<br/> I just have to start typing</h3>
            </AboutInfo>
          </AboutInfoDiv>
        </AboutContainer>
      </div>
    )
  }
}

export default About;
