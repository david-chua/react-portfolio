import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import './contact.css';
import github from './../Assets/Images/Social/github.png';
import linkedin from './../Assets/Images/Social/linkedin.png';
import wordpress from './../Assets/Images/Social/wordpress.png';
import workhard from './../Assets/Images/Social/workhard.jpg';

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name: '',
      email: '',
      message: '',
      success: ''
    }
  }

  handleForm = e => {
    let message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    axios.post(
      "https://formcarry.com/s/_ClqX-Sfr-Y",
      message,
      {headers: {"Accept": "application/json"}}
      )
      .then(response => {
        this.setState({
          name: '',
          email: '',
          message: '',
          success: 'Your message has been sent'
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  componentDidUpdate(prevState, prevProps){
    if (prevState.success !== this.state.success){
      setTimeout(() => this.setState({success: ''}), 7000);
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <h1 className="connect_h2"> Want to connect? </h1>
        <div className="contact_container">
          <section className="message_Form">
            <div>
              <img src={workhard} alt="work_hard"/>
            </div>
            <form className="formContainer" onSubmit={this.handleForm}>
              <label className="form_label" htmlFor="name">Name</label>
              <input className="form_input" value={this.state.name} type="text" id="name" name="name" onChange={this.handleFields} />

              <label className="form_label" htmlFor="email">Email</label>
              <input className="form_input" value={this.state.email} type="email" id="email" name="email" onChange={this.handleFields} />

              <label className="form_label" htmlFor="message">Your Message</label>
              <textarea className="form_input" value={this.state.message}  rows="5" name="message" id="message" onChange={this.handleFields}></textarea>

              <button className="form_button" type="submit">Send</button>
            </form>
          </section>
          <section className="contact_info">
            <div>
              <h2> Contact me </h2>
              <p> If you want to collaborate or have a project you want to collaborate on, feel free to get in touch.</p>

              <h3> Email:</h3>
              <p> dpchua.dev@gmail.com</p>
              <hr/>
              <h3> Phone:</h3>
              <p> 703-340-9150 </p>
              <hr/>
              <h3> On the web:</h3>
              <div className="iconContainer">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/david-chua"><img className="socialIcon" src={github} alt="github"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dpchua/"><img className="socialIcon" src={linkedin} alt="linkedin"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://whenlifebringsyoucode.wordpress.com/"><img className="socialIcon" src={wordpress} alt="wordpress"/></a>
              </div>

            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Contact;
