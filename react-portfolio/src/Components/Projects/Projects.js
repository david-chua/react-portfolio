import React from 'react';
import NavBar from './../NavBar';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import trainingForGains from './../../Assets/Images/trainingforgains_mac.png';
import cooking from './../../Assets/Images/cooking_user_mac.png';

const ProjectData = [
  {
    img: trainingForGains,
    title: 'Training For Gains'
  },
  {
    img: cooking,
    title: "What's Cooking"
  }

]

const ProjectMiniiContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: none;
    white-space: nowrap;
    padding: 10px 50px;

    &:: -webkit-slider-thumb{
      height: 15px;
      width: 25px;
      border-radius: 50%;
      cursor: pointer;
    }
`;


const Projects = () => {
  return(
    <div>
      <NavBar />
      <div>
        <ProjectMiniiContainer>
          {ProjectData.map(item =>{
              return <ProjectItem item={item} />
          })}
        </ProjectMiniiContainer>
      </div>

    </div>
  )
}

export default Projects
