import React from 'react';
import styled from 'styled-components';


const ProjectItemContainer = styled.div`
  padding-right: 50px;
  h2 {
    text-align: center;
  }

  @media(max-width: 1000px){
    h2 {
      font-size: 1.7em;
    }
  }
`;

const ProjectImagecontainer = styled.img`
  width: 150px;
  height: 150px;

  &:hover {
    width: 200px;
    height: 200px;
  }

  @media(max-width: 1000px){
    width: 250px;
    height: 250px;

    &:hover {
      width: 300px;
      height: 300px;
    }
  }
`;


class ProjectItem extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    const { item, chooseProject } = this.props;
    return(
      <ProjectItemContainer onClick={() => chooseProject(item)}>
        <ProjectImagecontainer src={item.img} alt="project image"/>
        <h2> {item.title} </h2>
      </ProjectItemContainer>
    )
  }
}

export default ProjectItem;
