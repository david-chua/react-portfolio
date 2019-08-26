import React from 'react';
import styled from 'styled-components';
import logo from './../../Assets/Images/bookr_logo.png';
import homePage from './../../Assets/Images/Bookr/bookr_home.png';
import booksPage from './../../Assets/Images/Bookr/bookr_books.png';
import news from './../../Assets/Images/Bookr/bookr_news.png';
import bookView from './../../Assets/Images/Bookr/bookr_book_view.png';
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

  @media(max-width: 320px){
    width: 90%;
  }
`;


const HomeContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
position: relative;
overflow: hidden;
margin-top: 16px;
`;

const Home = styled.img`
  text-align: center;
  border: 1px solid black;
  width: 70vw;
  height: 80vh;
  margin: 20px auto;
  text-align: center;

  @media(max-width: 1300px){
    height: 60vh;
  }

  @media(max-width: 1000px){
    height: 40vh;
  }
`;

const BookView = styled.img`
  text-align: center;
  width: 35vw;
  min-width: 400px;
  height: 80vh;
  margin: 0 auto

  @media(max-width: 414px)}
  height: 500px;

  @media (max-width: 320px){
    min-width: 280px;
  }
`;

const TechInfo = styled.div`
  width: 90%;
  margin: 30px auto;
  text-align: center;
  font-size: 1.4em;
  font-family: "Gill Sans MT";

  @media (max-width: 900px){
    margin: 0px auto;
  }
`;

const Views = styled.div`
  margin: 20px auto;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  color: #449DD1;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 1100px){
    justify-content: center;
  }
`;

const ViewButton = styled.button`
  padding: 10px 15px;
  color: #FFF;
  width: 150px;
  font-size: .8em;
  background: #449DD1;
  font-family: "Gill Sans MT";
  cursor: pointer;

  @media(max-width: 1100px){
    width: 90%;
  }
`;

  // background-image: url(${spread});
const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0px;
  width: 70%;
  height: 400px;
  margin: 30px auto;
  background-image: url(${spread});

  @media(max-width:1000px){
    height: 400px;
  }

  @media (max-width: 900px){
    height: 700px;
  }

  @media(max-width: 768px){
    height: 850px;
  }

  @media(max-width: 450px){
    height: 950px;
  }

`;

const TechStackPanel = styled.div`
  border: 2px solid black;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  z-index: 1;
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

  @media(max-width: 900px){
    height: 600px;
  }

  @media(max-width: 768px){
    height: 675px;
  }


  @media(max-width: 500px){
    height: 750px;
  }

  @media(max-width: 414px){
    height: 800px;
  }

  @media(max-width: 320px){
    height: 875px;
  }
`;

const TechStack = styled.div`
  width: 70%;
  height: 220px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-self: center;
  color: #FCFCFB;
  font-weight: bold;

  @media (max-width: 900px){
    flex-direction: column;
    height: 500px;
  }

  @media (max-width: 800px){
    flex-direction: column;
    height: 400px;
  }

  @media (max-width: 700px){
    height: 300px;
  }

  @media (max-width: 600px){
    heigh: 600px;
    margin-top: 30px;
  }

`;

const Tech = styled.div`
  width: 30%;
  text-align: center;

  @media (max-width: 1000px){
    width: 100%;
  }

  h3{
    font-size: 1.7em;
    font-weight: bold;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  p{
    font-size: 1.3em;
    line-height: 1.3em;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;

  }
`;

const BookrTitle = styled.div`
  display: block;
  margin-top: 20px;
  @media (max-width: 800px){
    height: 150px;
  }

  h2 {
    text-align: center
    font-size: 2.5em;
    font-weight: bold;
    font-family: "Gill Sans MT";
    color: '#5E366A';
    text-shadow:
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;
  }

  @media(max-width: 500px){
    height: 250px;
  }

  @media(max-width: 320px){
    height: 300px;
  }

`;

const AccomplishmentContainer = styled.div`
  padding-top: 50px;
  width: 70%;
  margin: 0 auto;

`;

const Accomplishmenth2 = styled.h2`
  text-align: center
  font-size: 2.5em;
  font-weight: bold;
  font-family: "Gill Sans MT";
  color: '#0741AD';
  text-decoration: underline;

  @media(max-width: 768px){
    font-size: 1.5em;
  }

  @media(max-width: 375px){
    font-size: 1.8em;
  }

`;

const AccomplishmentInfo = styled.div`
  text-align: center;
  margin: 20px auto 50px;

  p{
    font-size: 1em;
    line-height: 2em;

  }
`;

class Bookr extends React.Component{
  constructor(props){
    super(props);

    this.state={
      frontEndStack: ['React', 'Redux','SASS', 'React Router', 'Apollo Client', 'React-Bootstrap'],
      backEndStack: ['Knex', 'Bcrypt', 'Jsonwebtoken', 'SQLite3', 'PostgreSQL', 'GraphQL'],
      APIs: ['Web Storage api', 'Google Books API'],
      accomplishments: [
        'Implemented Google Books API for search functionality in the front end',
        'Combined implementation of Jsonwebtoken and Google Oauth',
        'Completed project in 8 weeks including design, data modeling, feature implementation',
        'Added mobile and tablet responsiveness to a majority of the front end application'
      ],
      displayImage: homePage,
      bookView: ""
    }
  }

  setImage = (image, type)  => {
      console.log(type, 'type')
    if (type === "bookView"){
      this.setState({
        displayImage: image,
        bookView: "bookView"
      })
    }
    else {
      this.setState({
        displayImage: image,
        bookView: ""
      })
    }
    console.log('bookView', this.state.bookView);
  }
  render(){
    const blue = '#0741AD';
    const lightblue='#449DD1';
    const babyblue='#78C0E0';
    const red = '#D82B21';
    const Links = {
        liveSite: 'https://bookr-book-app.netlify.com/',
        FEGithub: 'https://github.com/david-chua/Bookr-FE',
        BEGithub: 'https://github.com/david-chua/Bookr-BE'
      }
    return (
      <BookrContainer>
        <a className="link_title"><LogoImage src={logo}></LogoImage></a>
        <TechInfo>
          <Views>
            <h3> See other project views: </h3>
            <ViewButton onClick={() => this.setImage(homePage)}> Home </ViewButton>
            <ViewButton onClick={() => this.setImage(booksPage)} > Books Page </ViewButton>
            <ViewButton onClick={() => this.setImage(news)}> News </ViewButton>
            <ViewButton onClick={() => this.setImage(bookView, "bookView")}> Book Results </ViewButton>
          </Views>
        </TechInfo>

        <HomeContainer>
          {this.state.bookView === '' ? <Home className={this.state.bookView} src={this.state.displayImage} alt="home" /> : <BookView src={this.state.displayImage} alt="bookView" />}

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

        <AccomplishmentContainer>
          <Accomplishmenth2 className="bookraccomplishmenth2"> Accomplishment </Accomplishmenth2>
            <AccomplishmentInfo>
              { this.state.accomplishments.map(accomplishment => {
                return(
                  <p className="accomplishmentp">
                    {accomplishment}
                  </p>
                )
              })}
            </AccomplishmentInfo>
        </AccomplishmentContainer>


      </BookrContainer>
    )
  }
}

export default Bookr;
