import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 50%;
  padding-top: 3%;
  height: 100%;
`;

const AboutImg = styled.img`
  width: 80%;
  align-items: center;
`;

const AboutInfo = styled.div`
  width: 50%;

  & h1{
    text-align: center;
  }

  & p{
    font-size: 1.7em;
    font-weight: bold;
  }

  & p:nth-of-type(1){
    padding-left: 10%;
    text-align: left;
  }

  & p:nth-of-type(2){
    padding-left: 0%;
  }

  & p:nth-of-type(3){
    padding-left: 70%;
  }
`;

const Curiosity = styled.div`
  & p{
    text-align: left;
    font-size: 1em;
  }

  &
`;

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      curiosity: true,
      passionate: false,
      competitive: false
    }
  }

  openCuriosity = e => {
    e.preventDefault();
    this.setState({
        curiosity: true,
        passionate: false,
        competitive: false
    })
  }

  openPassion = e => {
    e.preventDefault();
    this.setState({
        curiosity: false,
        passionate: true,
        competitive: false
    })
  }

  openCompetition = e => {
    e.preventDefault();
    this.setState({
        curiosity: false,
        passionate: false,
        competitive: true
    })
  }


  render(){
    return(
      <div>
        <NavBar />
        <AboutContainer>
          <ImageContainer>
            <AboutImg src={require("./../Assets/Images/aboutme.png")} />
          </ImageContainer>
          <AboutInfo>
            <h1> About Me </h1>
            <p onClick={this.openCuriosity}>Curious</p>
            <p onClick={this.openPassion}>Passionate</p>
            <p onClick={this.openCompetition}>Competitive</p>

            {this.state.curiosity &&
              <Curiosity>
                <p> I've been a curious person throughout most of my life. I studied Biology because I was interested in learning medicine and the theory of evolution.</p>
                <p> I studied Chinese because the other half of my family comes from that background yet I've never had the experience of meeting them or experiencing that culture firsthand</p>
                <p> Throughout my life curiosity has always allowed me to excel because I wanted to learn more. If I was born before the age of internet, I can see myself being an archeologist with my love of learning about life and culture.</p>
                <p> I studied programming because I wanted to know how computer works. I wanted to create things. </p>
              </Curiosity>
            }
            {this.state.passionate &&
              <div>
                Passion
              </div>
            }
            {this.state.competitive &&
              <div>
                Competition
              </div>
            }
          </AboutInfo>
        </AboutContainer>
      </div>
    )
  }
}

export default About;
