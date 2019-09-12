import React from 'react';
import styled from 'styled-components';
import homePage from './../../Assets/Images/Training/training_for_gains.png';
import userPage from './../../Assets/Images/Training/training_user.png';
import workout from './../../Assets/Images/Training/training_workout_info.png';
import create from './../../Assets/Images/Training/training_create_workout.png';
import edit from './../../Assets/Images/Training/training_edit.png';
import training from './../../Assets/Images/Training/training.png';
import ProjectLinks from './ProjectLinks';

const TrainingForGainsContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  margin: 30px auto;

  h1 {
    color: '#5E366A';
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
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  margin: 30px auto;

`;


const TechInfo = styled.div`
  width: 90%;
  margin: 30px auto;
  text-align: center;
  font-size: 1.4em;
  font-family: "Gill Sans MT";

  @media (max-width: 900px){
    margin: 0px auto;

    h2{
    font-size: 1em;
    }
    h4{
      font-size: .7em;
    }
  }
`;

const TechStackContainer = styled.div`
  padding: 30px 0px;
  width: 70%;
  height: 300px;
  margin: 0 auto;
  background-image: url(${training});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 800px){
    width: 80%;
    height: 550px;
  }

  @media(max-width: 350px){
    height: 620px;
  }

`;
const TrainingTitle = styled.div`
  display: block;
  color: #828a30;

  h2 {
    text-align: center
    font-size: 2.5em;
    font-weight: bold;
    font-family: "Gill Sans MT";
    color: '#5E366A';
  }
  @media (max-width: 800px){
    height: 150px;
  }

  @media(max-width: 350px){
    height: 200px;
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
    width: 80%;
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
    color: #828a30;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  }

  p{
    font-size: 1.3em;
    line-height: 1.3em;
    color: #828a30;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }
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
    const light_green= "#828A30";
    const dark_font = "#0C0F12";
    const Links = {
        liveSite: 'https://gains-for-days.herokuapp.com/',
        FEGithub: 'https://github.com/david-chua/Workout_Front_End',
        BEGithub: 'https://github.com/david-chua/Workout_API'
      }
    return(
      <TrainingForGainsContainer>
        <h1 className="appTitle"> Training For Gains </h1>
        <LogoImage src={homePage} />
          <TechInfo>
          <h2> A weight lifting logging application to keep track of workouts including sets, reps, and weights.</h2>
          <h4> Sign In: goku@dbz.com <br/> Password: gohan</h4>
          <ProjectLinks
            liveSite={Links.liveSite}
            FEGithub={Links.FEGithub}
            BEGithub={Links.BEGithub}
            background = {dark_font}
            hoverColor={light_green}/>
          </TechInfo>

          <TechStackContainer>
            <TrainingTitle>
              <h2 className="trainingTitleh2"> Training For Gains Tech Stack </h2>
            </TrainingTitle>
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
            <Accomplishmenth2 className="trainingAccomplishmenth2"> Accomplishments </Accomplishmenth2>
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

      </TrainingForGainsContainer>

    )
  }
}

export default TrainingForGains;
