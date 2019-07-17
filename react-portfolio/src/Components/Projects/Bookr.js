import React from 'react';
import styled from 'styled-components';
import logo from './../../Assets/Images/bookr_logo.png';
import homePage from './../../Assets/Images/Bookr/home.png';
import info from './../../Assets/Images/Bookr/book_info.png';
import review from './../../Assets/Images/Bookr/review.png';
import edit from './../../Assets/Images/Bookr/edit.png';
import spread from './../../Assets/Images/Bookr/books.jpg';


import ProjectLinks from './ProjectLinks';

const BookrContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;

`;

const LogoImage = styled.img`
  margin: 0 auto;
  display: block;
  text-align: center;
`;


const HomeContainer = styled.div`
  width: 80%;
  height: 70vh;
  margin: 30px auto;
  display: flex;
`;

const Home = styled.img`
  margin: 0 auto;
  display: block;
  text-align: center;
  border: 1px solid black;
`;

const TechInfo = styled.div`
  width: 90%;
  margin: 30px auto;
  text-align: center;
  font-size: 1.4em;
  font-family: "Gill Sans MT";
`;

const Views = styled.div`
  margin: 20px auto;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  color: #449DD1;

`;

const ViewButton = styled.button`
  padding: 10px 15px;
  color: #FFF;
  width: 150px;
  font-size: .8em;
  background: #449DD1;
  font-family: "Gill Sans MT";
  cursor: pointer;
`;

  // background-image: url(${spread});
const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0px;
  width: 70%;
  height: 300px;
  margin: 60px auto;
  background-image: url(${spread});


  @media (max-width: 800px){
    height: 550px;
  }

`;

const TechStackPanel = styled.div`
  border: 2px solid black;
  width: 80%;
  margin: 0 auto;
  z-index: 1;
  border: 1px solid white;
  position: relative;
  color: white;
  background: inherit;

  &::before: {
    content: “”;
    background: inherit;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
    filter: blur(10px);
  }
`;

const TechStack = styled.div`
  width: 70%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-self: center;
  color: #FCFCFB;
  font-weight: bold;

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
  }

  p{
    font-size: 1.3em;
    line-height: 1.3em;
  }
`;

const BookrTitle = styled.div`
  display: block;
  @media (max-width: 800px){
    height: 150px;
  }

  h2 {
    text-align: center
    font-size: 2.5em;
    font-weight: bold;
    font-family: "Gill Sans MT";
    color: '#5E366A';
  }
`;

class Bookr extends React.Component{
  constructor(props){
    super(props);

    this.state={
      frontEndStack: ['React', 'Styled Components', 'React Router'],
      backEndStack: ['Knex', 'Bcrypt', 'Jsonwebtoken', 'SQLite3', 'postgreSQL'],
      APIs: ['web storage api', 'Google Books API'],
      accomplishments: [
        'Implemented Google Books API for search functionality in the front end',
        'implemented front end React portion in less than 24 hours of work time',
        'Communicated with backend developer in order to get the data needed from backend REST API calls',
        'Added some mobile responsiveness to a majority of the front end application'
      ],
      displayImage: homePage
    }
  }

  setImage = image  => {
    this.setState({
      displayImage: image
    })
  }
  render(){
    const blue = '#0741AD';
    const lightblue='#449DD1';
    const babyblue='#78C0E0';
    const red = '#D82B21';
    const Links = {
        liveSite: 'https://bookr-book-review.netlify.com/',
        FEGithub: 'https://github.com/david-chua/Bookr-Front-End',
        BEGithub: 'https://github.com/david-chua/Bookr-Back-End'
      }
    return (
      <BookrContainer>
        <a className="link_title"><LogoImage src={logo}></LogoImage></a>
        <TechInfo>

          <Views>
            <h3> See other project views: </h3>
            <ViewButton onClick={() => this.setImage(homePage)}> Home </ViewButton>
            <ViewButton onClick={() => this.setImage(info)} > Book Info </ViewButton>
            <ViewButton onClick={() => this.setImage(review)}> Review </ViewButton>
            <ViewButton onClick={() => this.setImage(edit)}> Edit </ViewButton>
          </Views>
        </TechInfo>
        <HomeContainer>
          <Home src={this.state.displayImage} alt="home" />

        </HomeContainer>


        <TechInfo>
          <h2> A book review app designed to show books you've rated and show how others are rating the same book. </h2>
          <ProjectLinks
            liveSite={Links.liveSite}
            FEGithub={Links.FEGithub}
            BEGithub={Links.BEGithub}
            background={blue}
            hoverColor={red}
          />
        </TechInfo>
        <TechStackContainer>
          <TechStackPanel>
          <BookrTitle>
            <h2 className="bookrTitleh2"> Bookr Tech Stack </h2>
          </BookrTitle>
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
          </TechStackPanel>
        </TechStackContainer>


      </BookrContainer>
    )
  }
}

export default Bookr;
