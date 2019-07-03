import React from 'react';
import NavBar from './../NavBar';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import ProjectDetails from './ProjectDetail';
import trainingForGains from './../../Assets/Images/Mac/trainingforgains_mac.png';
import cooking from './../../Assets/Images/Mac/cooking_user_mac.png';
import helloMelon from './../../Assets/Images/Mac/hellomelon_mac.png';

const ProjectData = [
  {
    id: 1,
    img: helloMelon,
    title: 'Hello Melon'
  },
  {
    id: 3,
    img: trainingForGains,
    title: 'Training For Gains'
  },
  {
    id: 4,
    img: cooking,
    title: "What's Cooking"
  }

]

const ProjectMiniiContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: none;
    text-align: center;
    white-space: nowrap;
    padding: 10px 50px;

    &:: -webkit-slider-thumb{
      height: 15px;
      width: 25px;
      border-radius: 50%;
      cursor: pointer;
    }
`;


class Projects extends React.Component {

  constructor(props){
    super(props)
    this.state={
      chosenProject: []
    }
  }

  chooseProject = item => {
    this.setState({
      chosenProject: item
    })
  }

  render(){
    return(
      <div>
        <NavBar />
        <div>
          <ProjectMiniiContainer>
            {ProjectData.map(item =>{
                return <ProjectItem key={item.id} item={item} chooseProject={this.chooseProject} />
            })}
          </ProjectMiniiContainer>
          <ProjectDetails chosenProject={this.state.chosenProject}/>
        </div>

      </div>
    )
  }
}

export default Projects
