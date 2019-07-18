import React from 'react';
import styled from 'styled-components';
import TrainingForGains from "./TrainingForGains";
import HelloMelon from "./HelloMelon";
import Bookr from "./Bookr";

class ProjectDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const { id } = this.props.chosenProject
    return(
      <div>
        {id === 1 && <HelloMelon />}
        {id === 2 && <Bookr/>}
        {id === 3 && <TrainingForGains />}
        <Bookr/>
      </div>
    )
  }
}

export default ProjectDetails;
