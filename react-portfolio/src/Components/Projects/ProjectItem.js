import React from 'react';
import styled from 'styled-components';

const ProjectItemContainer = styled.div`
  padding-right: 50px;
  h2 {
    text-align: center;
  }
`;

const ProjectImagecontainer = styled.img`
  width: 150px
  height: 150px

`;
class ProjectItem extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    const { item } = this.props;
    return(
      <ProjectItemContainer>
        <ProjectImagecontainer src={item.img} alt="project image"/>
        <h2> {item.title} </h2>
      </ProjectItemContainer>
    )
  }
}

export default ProjectItem;
