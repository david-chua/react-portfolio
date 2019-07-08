import React from 'react';
import styled from 'styled-components';

const ProjectButton = styled.button`


`;

const ProjectLinks = props => {
  return(
    <div>
      {props.frontEnd &&
        <ProjectButton>
          Front End Github
        </ProjectButton>}
    </div>
  )
}

export default ProjectLinks;
