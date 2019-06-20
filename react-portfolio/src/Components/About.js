import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  h1{
    text-align: center;
  }
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


const Curiosity = styled.div`
  padding: 3% 5% 3% 0;
  & p{
    font-size: 1.2em;
    font-weight: none !important;
    padding-left: 10% !important;
    text-align: left !important;
  }

  & p:nth-of-type(1){
    padding-left: 10% !important;
    text-align: left;
  }

  & p:nth-of-type(2){
    padding-left: 10%;
    text-align: left !important;
  }

& p:nth-of-type(3){
  padding-left: 10% !important;
  text-align: left;
}
`;

const AboutInfo = styled.div`
  width: 50%;

  & h1{
    text-align: center;
  }

  & h5{
    font-size: 1.4em;
    font-weight: bold;
  }

  & h5:nth-of-type(1){
    padding-left: 10%;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;
    background-image: linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1));
  }

  & h5:nth-of-type(2){
    padding-left: 0%;
  }

  & h5:nth-of-type(3){
    padding-left: 70%;
  }
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
            <h5 onClick={this.openCuriosity}>Curious</h5>
            <h5 onClick={this.openPassion}>Passionate</h5>
            <h5 onClick={this.openCompetition}>Competitive</h5>

            {this.state.curiosity &&
              <Curiosity className="curiosity">
                <p> I'm just a curious guy who loves to learn. </p>
                <p> Not only did my educational background stem from my curiousity, it also is the reason for why I'm in the programming world. </p>
                <p> Being a biology major, programming was something I never really thought about until I became a technical recruiter. It opened my world into learning the different aspects of technology.</p>
                <p> And from there, the learning never stops. And I'm happy with that. </p>



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
