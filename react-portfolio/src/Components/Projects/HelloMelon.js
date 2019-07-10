import React from 'react';
import styled from 'styled-components';
import homePage from './../../Assets/Images/HelloMelon/home.png';
import coachPage from './../../Assets/Images/HelloMelon/coach.png';
import calendarPage from './../../Assets/Images/HelloMelon/calendar.png';
import logo from './../../Assets/Images/logo-green.png';
import spread from './../../Assets/Images/HelloMelon/spread.png';

import ProjectLinks from './ProjectLinks';



const HelloMelonContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;

  h1 {
    color: #063A7C;
    font-size: 2.3em;
    font-family: "Gill Sans MT";
    font-weight: bold;
    text-align: center;
    padding-bottom: 40px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
`;

const LogoImage = styled.img`
  margin: 0 auto;
  display: block;
  text-align: center;
`;

const HelloHome = styled.img`
  width: 70vw;
  height: 80vh;
  margin: 0 auto;
  text-align: center;

  @media(max-width: 1300px){
    height: 60vh;
  }

  @media(max-width: 1000px){
    height: 40vh;
  }
`;

const TechInfo = styled.div`
  width: 90%;
  margin: 30px auto;
  text-align: center;
  font-size: 1.4em;
  font-family: "Gill Sans MT";
`;

const TechStackContainer = styled.div`
  padding: 30px;
  width: 70%;
  height: 300px;
  margin: 0 auto;
  background-image: url(${spread});

  @media (max-width: 800px){
    height: 550px;
  }

`;
const HelloTitle = styled.div`
  display: block;
  @media (max-width: 800px){
    height: 150px;
  }

  h2 {
    text-align: center
    font-size: 2.5em;
    margin-left: 50px;
    font-weight: bold;
    font-family: "Gill Sans MT";
    color: '#5E366A';
  }
`;


const TechStack = styled.div`
  width: 70%;
  height: 200px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  justify-content: space-around;
  align-self: center;

  @media (max-width: 800px){
    flex-direction: column;
  }
`;

const Tech = styled.div`
  width: 30%;
  text-align: center;

  @media (max-width: 1000px){
    width: 100%;
  }

  h3{
    font-size: 1.3em;
    font-weight: bold;
    color: '#5E366A';
  }

  p{
    font-size: 1.3em;
  }
`;

const AccomplishmentContainer = styled.div`
  padding-top: 50px;

`;

const Accomplishmenth2 = styled.h2`
  text-align: center
  font-size: 2.5em;
  margin-left: 50px;
  font-weight: bold;
  font-family: "Gill Sans MT";
  color: "#60B5A9";
`;

class HelloMelon extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      carousel: [homePage, coachPage, calendarPage],
      selectedCarouselIndex: 0,
      frontEndStack: ['React', 'Apollo Client', 'GraphQL', 'MaterialUI', 'Styled Components'],
      backEndStack: ['PostgreSQL', 'GraphQL', 'SQLite3', 'Knex'],
      APIs: ['Google Auth API', 'Stripe API', 'Edamam API']
    }
  }

  componentDidMount(){
    this.startCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.startCarousel);

  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.rightClick();
    },4000)
  }

  leftClick = () => {
    if (this.state.selectedCarouselIndex === 0 ){
      this.setState({ selectedCarouselIndex: (this.state.carousel.length - 1)})
    } else {
      this.setState({ selectedCarouselIndex: this.state.selectedCarouselIndex - 1})
    }
  }

  rightClick = () => {
    if (this.state.selectedCarouselIndex === (this.state.carousel.length - 1)){
      this.setState({selectedCarouselIndex: 0})
    } else {
      this.setState({
        selectedCarouselIndex: this.state.selectedCarouselIndex + 1
      })
    }
  }

  selectedImage = () => {
    return <HelloHome className="carousel" src={this.state.carousel[this.state.selectedCarouselIndex]} alt="project image"/>
  }
  render(){
    const purple = '#5E366A';
    const green="#60B5A9";
    const Links = {
        liveSite: 'https://nutrition-tracker-lambda.netlify.com/',
        FEGithub: 'https://github.com/labspt3-nutrition-tracker/nutrition-tracker-FE',
        BEGithub: 'https://github.com/labspt3-nutrition-tracker/nutrition-tracker-BE'
      }

    return(
      <HelloMelonContainer>
        <a className="link_title" href={Links.liveSite}><LogoImage src={logo}></LogoImage
></a>
        <CarouselContainer>
          <div className="left-button" onClick={this.leftClick}>{"<"}</div>
          {this.selectedImage()}
          <div className="right-button" onClick={this.rightClick}>{">"}</div>
        </CarouselContainer>
        <ProjectLinks />
        <TechInfo>
          <h2> A nutrition tracking app for logging macros with a coach feature for accountability. </h2>
          <ProjectLinks
            liveSite={Links.liveSite}
            FEGithub={Links.FEGithub}
            BEGithub={Links.BEGithub}
            background = {purple}
            hoverColor={green}/>
        </TechInfo>

        <TechStackContainer>
          <HelloTitle>
            <h2> HelloMelon Tech Stack </h2>
          </HelloTitle>
          <TechStack>
            <Tech>
            <h3 className="h3_padding"> Frontend: </h3>
            { this.state.frontEndStack.map(item => {
              return <p> { item }</p>
            })}
            </Tech>
            <Tech>
              <h3 className="h3_padding"> Backend: </h3>
              { this.state.backEndStack.map(item => {
                return <p> { item }</p>
              })}
            </Tech>
            <Tech>
              <h3 className="h3_padding"> 3rd Party APIs</h3>
              { this.state.APIs.map(item => {
                return <p> { item }</p>
              })}
            </Tech>
          </TechStack>
        </TechStackContainer>

        <AccomplishmentContainer>
          <Accomplishmenth2> Accomplishment </Accomplishmenth2>
        </AccomplishmentContainer>
      </HelloMelonContainer>
    )
  }
}

export default HelloMelon;
