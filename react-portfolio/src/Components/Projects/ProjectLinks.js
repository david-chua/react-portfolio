import React from 'react';
import styled from 'styled-components';

const ProjectLinksContainer = styled.div`
  width: 70%;
  display: flex;
  margin: 30px auto;
  justify-content: center;
  @media(max-width: 800px){
    align-self; center;
    flex-direction: column;
  }
`;

const ProjectButton = styled.button`
  margin: 0 30px;
  padding: 5px 15px;
  border-radius: 15px;
  width: 200px;
  text-align: center;
  color: #FFF;
  font-size: .7em;
  background: ${props => props.background ? props.background : 'FFFFFF'};

  &:hover {
    background: ${props => props.hoverColor ? props.hoverColor : 'FFFFFF'};
  }

  @media(max-width: 800px){
    margin: 5px auto;

  }
`;

const ProjectLinks = props => {
  return(
    <ProjectLinksContainer>
      {props.liveSite &&
          <a target="_blank" rel="noopener noreferrer" href={props.liveSite}>
            <ProjectButton background={props.background} hoverColor={props.hoverColor}>
              Demo
            </ProjectButton>
        </a>

      }
      {props.FEGithub &&
        <a target="_blank" rel="noopener noreferrer" href={props.FEGithub}>
          <ProjectButton background={props.background} hoverColor={props.hoverColor}>
            Front End Github
          </ProjectButton>
        </a>
      }
      {props.BEGithub &&
        <a target="_blank" rel="noopener noreferrer" href={props.BEGithub}>
          <ProjectButton background={props.background} hoverColor={props.hoverColor}>
            Back End Github
          </ProjectButton>
        </a>
      }
    </ProjectLinksContainer>
  )
}

export default ProjectLinks;
