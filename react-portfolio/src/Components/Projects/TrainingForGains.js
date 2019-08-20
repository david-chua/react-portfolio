import React from 'react';
import styled from 'styled-components';
import homePage from './../../Assets/Images/Training/training_for_gains.png';
import userPage from './../../Assets/Images/Training/training_user.png';
import workout from './../../Assets/Images/Training/training_workout_info.png';
import create from './../../Assets/Images/Training/training_create_workout.png';
import edit from './../../Assets/Images/Training/training_edit.png';

import ProjectLinks from './ProjectLinks';
const TrainingForGainsContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;

  h1 {
    color: 3E3E3E;
    font-size: 2.3em;
    font-family: "Gill Sans MT";
    font-weight: bold;
    text-align: center;
  }

  h2{
    font-weight: bold;
  }

  h4{
    line-height: 1.5em;
  }
`;

const LogoImage = styled.img`
  margin: 0 auto;
  display: block;
  text-align: center;
`;

const TechInfo = styled.div`
  width: 90%;
  margin: 30px auto;
  text-align: center;
  font-size: 1.4em;
  font-family: "Gill Sans MT";
`;

class TrainingForGains extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      frontEndStack: ['AngularJS', 'JavaScript', 'Bulma'],
      backEndStack: ['NodeJS', 'PostgreSQL', 'Ruby on Rails'],
      APIs: ['Web Storage api'],
      accomplishments: [
        'Created full stack application within 4 months of learning programming',
        'Completed first full stack MVP iteration in 2 days.',
        'Solo project from start to finish',
      ]
    }
  }
  render(){
    const purple = '#5E366A';
    const green="#60B5A9";
    const Links = {
        liveSite: 'https://gains-for-days.herokuapp.com/',
        FEGithub: 'https://github.com/david-chua/Workout_Front_End',
        BEGithub: 'https://github.com/david-chua/Workout_API'
      }
    return(
      <TrainingForGainsContainer>
        <h1> Training For Gains </h1>
        <LogoImage src={homePage} />
          <TechInfo>
          <h2> A weight lifting logging application to keep track of workouts including sets, reps, and weights.</h2>
          <h4> Sign In: goku@dbz.com <br/> Password: gohan</h4>
          <ProjectLinks
            liveSite={Links.liveSite}
            FEGithub={Links.FEGithub}
            BEGithub={Links.BEGithub}
            background = {purple}
            hoverColor={green}/>
        </TechInfo>
      </TrainingForGainsContainer>

    )
  }

}

export default TrainingForGains;
