import React from 'react';
import styled from 'styled-components';
import helloMelonHome from './../../Assets/Images/HelloMelon/home.png';

const HelloMelonContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 20px;

  h1 {
    color: #063A7C;
    font-size: 2.3em;
    font-family: "Gill Sans MT";
    font-weight: bold;
    text-align: center;
    padding-bottom: 40px;
  }
`;

const HelloHome = styled.img`
  width: 70vw;
  height: 80vh;
  margin-left: 30px;
`;

const HelloMelon = props => {
  return(
    <HelloMelonContainer>
      <h1> Hello Melon </h1>
      <HelloHome className="app_home" src={helloMelonHome} alt="project image">

      </HelloHome>
    </HelloMelonContainer>
  )
}

export default HelloMelon;
