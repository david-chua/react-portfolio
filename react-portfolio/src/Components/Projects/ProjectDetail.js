import React from 'react';
import styled from 'styled-components';
import TrainingForGains from "./TrainingForGains";
import HelloMelon from "./HelloMelon";

class ProjectDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const { id } = this.props.chosenProject
    return(
      <div>
    {/*  {id === 3 && <TrainingForGains />} */}
        // { id === 1 && <HelloMelon />}
        <HelloMelon />
      </div>
    )
  }
}

export default ProjectDetails;
