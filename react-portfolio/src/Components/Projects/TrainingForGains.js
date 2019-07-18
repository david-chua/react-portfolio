import React from 'react';
import styled from 'styled-components';

const TrainingForGainsContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;

  h1 {
    color: #063A7C;
    font-size: 1.8em;
    font-family: "Gill Sans MT";
    font-weight: bold;
  }
`;

class TrainingForGains extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      frontEndStack: ['AngularJS', 'JavaScript', 'Bulma'],
      backEndStack: ['NodeJS', 'PostgreSQL', 'Ruby on Rails'],
      APIs: ['Web Storage api', 'Google Books API'],
      accomplishments: [
        'Implemented Google Books API for search functionality in the front end',
        'implemented current front end React portion in less than 24 hours of work time',
        'Communicated with backend developer in order to get the data needed from backend REST API calls',
        'Added mobile and tablet responsiveness to a majority of the front end application'
      ]
    }
  }
  render(){
    return(
      <TrainingForGainsContainer>
        <h1> Training For Gains </h1>
      </TrainingForGainsContainer>
    )
  }

}

export default TrainingForGains;
