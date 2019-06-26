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

const TrainingForGains = props => {
  return(
    <TrainingForGainsContainer>
      <h1> Training For Gains </h1>
    </TrainingForGainsContainer>
  )
}

export default TrainingForGains;
