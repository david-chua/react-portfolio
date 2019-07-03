import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';
import helloMelonHome from './../../Assets/Images/HelloMelon/home.png';
import coachPage from './../../Assets/Images/HelloMelon/coach.png';
import calendarPage from './../../Assets/Images/HelloMelon/calendar.png';



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
  text-align: center;
`;

const HelloHome = styled.img`
  width: 70vw;
  height: 80vh;
  margin: 0 auto;
  text-align: center;
`;

const TechInfo = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: left;
  border-top: 1px solid black;
`;

class HelloMelon extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render(){
    const { index, direction } = this.state;

    return(
      <HelloMelonContainer>
        <h1> Hello Melon </h1>
        <CarouselContainer>
          <Carousel
          activeIndex={index}
          direction={direction}
          indicators={false}
          interval={2000}
          onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <HelloHome className="app_home" src={helloMelonHome} alt="project image"/>
              <Carousel.Caption
                bsPrefix={"helloMelonImages"}>
                <h3>Home Page</h3>
                <p>HelloMelon is a nutrition tracker application</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <HelloHome className="app_home" src={coachPage} alt="project image"/>

              <Carousel.Caption
                bsPrefix={"helloMelonImages"}>
                <h3>Coach Page</h3>
                <p>A way for coaches to interact with their trainees and see their daily status to keep them accountable</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <HelloHome className="app_home" src={calendarPage} alt="project image"/>

              <Carousel.Caption
                bsPrefix={"helloMelonImages"}>
                <h3>Calendar</h3>
                <p>A way for users to keep track of their food intake beyond the daily dashboard.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </CarouselContainer>
        <TechInfo>
          <h2> The following Tech was used with this project </h2>
        </TechInfo>
      </HelloMelonContainer>
    )
  }
}

export default HelloMelon;
