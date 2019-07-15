import React from 'react';
import styled from 'styled-components';
import logo from './../../Assets/Images/bookr_logo.png';
import homePage from './../../Assets/Images/Bookr/home.png';
import info from './../../Assets/Images/Bookr/book_info.png';
import review from './../../Assets/Images/Bookr/review.png';
import edit from './../../Assets/Images/Bookr/edit.png';

const BookrContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;

  h1 {
    color: '#4CAF50';
  }
`;

const LogoImage = styled.img`
  margin: 0 auto;
  display: block;
  text-align: center;
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
      ]
    }
  }

  render(){
    return (
      <BookrContainer>
      <a className="link_title"><LogoImage src={logo}></LogoImage></a>
      </BookrContainer>
    )
  }
}

export default Bookr;
