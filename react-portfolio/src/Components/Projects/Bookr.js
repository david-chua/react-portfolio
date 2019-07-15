import React from 'react';
import styled from 'styled-components';
import logo from './../../Assets/Images/bookr_logo.png';
import homePage from './../../Assets/Images/Bookr/home.png';
import info from './../../Assets/Images/Bookr/book_info.png';
import review from './../../Assets/Images/Bookr/review.png';
import edit from './../../Assets/Images/Bookr/edit.png';

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
  border-bottom: 1px solid black;
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
    const lightblue='#A3D9FF';
    const red = '#D82B21';
    const Links = {
        liveSite: 'https://bookr-book-review.netlify.com/',
        FEGithub: 'https://github.com/david-chua/Bookr-Front-End',
        BEGithub: 'https://github.com/david-chua/Bookr-Back-End'
      }
    return (
      <BookrContainer>
        <a className="link_title"><LogoImage src={logo}></LogoImage></a>
        <HomeContainer>
          <Home src={this.state.displayImage} alt="home" />
        </HomeContainer>
        <TechInfo>
          <h3> See other project views </h3>
          <Views>
            <ViewButton onClick={() => this.setImage(homePage)}> Home </ViewButton>
            <ViewButton onClick={() => this.setImage(info)} > Book Info </ViewButton>
            <ViewButton onClick={() => this.setImage(review)}> Review </ViewButton>
            <ViewButton onClick={() => this.setImage(edit)}> Edit </ViewButton>
          </Views>
        </TechInfo>
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


      </BookrContainer>
    )
  }
}

export default Bookr;
