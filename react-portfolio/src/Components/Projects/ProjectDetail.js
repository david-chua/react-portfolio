import React from 'react';
import styled from 'styled-components';
import TrainingForGains from "./TrainingForGains";

class ProjectDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const { id } = this.props.chosenProject
    console.log(this.props.chosenProject.id)
    return(
      <div>
    {/*  {id === 3 && <TrainingForGains />} */}
      <TrainingForGains />
      </div>
    )
  }
}

export default ProjectDetails;
