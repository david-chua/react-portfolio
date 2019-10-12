import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import './about.css';
import javascript from './../Assets/Images/Skills/javascript.svg';
import react from './../Assets/Images/Skills/react.png';
import redux from './../Assets/Images/Skills/redux.png';
import graphql from './../Assets/Images/Skills/graphql.png';

const AboutContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const ImageContainer = styled.div`
  height: 90%;
  margin: 0 auto;
`;

const AboutImg = styled.img`
  width: 100%;
  maring: 0 auto;
`;

// const AboutInfoDiv = styled.div`
//   width: 50%;
//   height: 100%;
//   font-family: "Gill Sans MT";
//   color: #F5F4E9;
//   background: url(${smoke});
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//
//   @media(max-width: 1000px){
//     width: 90%;
//     color: black;
//     height: 500px;
//   }
// `;
//
//
// const AboutInfo = styled.div`
//   width: 50%;
//   font-family: "Gill Sans MT";
//   margin: 30% auto;
//   color: white;
//
//   & h1{
//     text-align: center;
//
//     & span{
//       color: #80A4ED;
//       font-size: 1.7em;
//     }
//   }
//
//   & h3{
//     text-align: center;
//     font-size: 1.3em;
//     & span{
//       color: #80A4ED;
//       font-size: 1.8em;
//     }
//   }
//
//   @media(max-width: 1000px){
//     width: 100%;
//     margin: 10% auto;
//   }
//
// `;
//


class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <AboutContainer>
          <ImageContainer>
            <AboutImg src={require("./../Assets/Images/aboutme.png")} />
          </ImageContainer>
          <div className="about_me">
            <h1> About Me: </h1>
            <p> Full stack software developer with a love for the front end. I love to dabble in technologies like React, JavaScript, GraphQL, Node and Express but can work my way around building a REST API with a PostgreSQL database.</p>
            <br/>
            <p> I've spent a majority of my career in both the hospitality and retail industry working in all aspects of the roles from being a server to handling my own team. After over a decade of experience combined in both fields, I've developed a strong ability to be creating in solving problems, be clear in delivering communication in both nontechnical and technical roles and be precise in executing a solution.</p>
            <br/>
            <p> My switch to programming occurred after having the chance to develop a website for my previous job. I was hooked after that and I knew I need to be in technology. It was everything I look for in a career. The constant need to learn, the new problems that comes up, the possibility to improve anything and everything, I knew that software engineering was the career for me. So here I am.</p>
            <br/>
            <p>If I'm not hacking away at my code or learning new technologies, you can probably find me doing one of three things: Sleeping, Eating, or Watching a movie.</p>
            <br />
            <p>Want to know anything else? Just send me a message in my <a target="_blank" href="https://davidchua.me/contact">contact page</a>, stalk my <a target="_blank" href="https://github.com/david-chua">Github</a> profile so you know what I'm up to. Connect with me on <a target="_blank" href="https://www.linkedin.com/in/dpchua/">LinkedIn</a>. There's also my <a target="_blank" href="https://whenlifebringsyoucode.wordpress.com/">Wordpress</a> blog where I mostly blabber about what I'm currently doing or just explaining a piece of code that I just learned so I can analyze it and help others in learning that same code. </p>
            <br />
            <p> PS, I'm also big on gaming and Anime, if that wasn't so obvious already.</p>
          </div>
          <div className="skillset">
            <h1> My Top Skills </h1>
            <div className="top_skills">
              <div className="skill">
                <h2> JavaScript </h2>
                <img className="skill_icon" src={javascript} alt="JavaScript"/>
              </div>
              <div className="skill">
                <h2> React </h2>
                <img className="skill_icon" src={react} alt="React JS" />
              </div>
              <div className="skill">
                <h2> Redux </h2>
                <img className="skill_icon" src={redux} alt="Redux" />
              </div>
              <div className="skill">
                <h2> GraphQL</h2>
                <img className="skill_icon" src={graphql} alt="GraphQL"/>
              </div>
            </div>
          </div>

          <div class="other_skills">
            <h1> My Other Skills </h1>
          </div>
          <div className="skills_list">
            <div class="languages">
              <ul>
                <li class="title-start">Languages:</li>
                <li><span>Python</span></li>
                <li><span>Java</span></li>
              </ul>
            </div>

            <div class="languages">
              <ul>
                <li class="title-start">Front End:</li>
                <li><span>HTML/CSS</span></li>
                <li><span>AngularJS 4</span></li>
                <li><span>D3.JS</span></li>
                <li><span>JQuery</span></li>
                <li class="title-start">In Progress</li>
                <li><span>WebSockets</span></li>
              </ul>
            </div>

            <div class="languages">
              <ul>
                <li class="title-start">CSS Frameworks:</li>
                <li><span>Bootstrap</span></li>
                <li><span>MaterialUI</span></li>
                <li><span>LESS</span></li>
                <li><span>SASS</span></li>
                <li><span>Bulma</span></li>
                <li><span>Styled Components</span></li>
              </ul>
            </div>

            <div class="languages">
              <ul>
                <li class="title-start">Back End, Middleware, and Databases:</li>
                <li><span>Express.js</span></li>
                <li><span>PostgreSQL</span></li>
                <li><span>Rails</span></li>
                <li><span>Ruby</span></li>
                <li><span>ExpressJS</span></li>
                <li><span>Authentication</span></li>
                <li><span>SQLite3</span></li>
                <li class="title-start">In Progress</li>
                <li><span>MySQL</span></li>
              </ul>
            </div>

            <div class="languages">
              <ul>
                <li class="title-start">CRM Platforms:</li>
                <li><span>WordPress</span></li>
                <li><span>Shopify</span></li>
                <li><span>Salesforce</span></li>
              </ul>
            </div>

            <div class="languages">
              <ul>
                <li class="title-start">Project Mangement:</li>
                <li><span>JIRA</span></li>
                <li><span>Jenkins</span></li>
                <li><span>Asana</span></li>
                <li><span>Trello</span></li>
                <li><span>Slack</span></li>
                <li><span>Skype</span></li>
                <li><span>Zoom</span></li>
              </ul>
            </div>

            <div class="languages">
              <ul>
                <li class="title-start">Prototyping & Wireframing:</li>
                <li><span>Sketch</span></li>
                <li><span>Adobe Photoshop</span></li>
                <li><span>InvisionApp</span></li>
                <li><span>Photoshop</span></li>
              </ul>
            </div>
          </div>
        </AboutContainer>
      </div>
    )
  }
}

export default About;


// <AboutContainer>
//   <ImageContainer>
//     <AboutImg src={require("./../Assets/Images/aboutme.png")} />
//   </ImageContainer>
//   <AboutInfoDiv>
//     <AboutInfo>
//       <h1> Hi, my name is <span> David Chua </span> </h1>
//       <h2> I'm a full stack software developer with a love for all things React </h2>
//       <h2> My passion with programming comes from idea that I can create anything I want with just the letters in my keyboard</h2>
//       <h3> <span> Games</span> maybe, <span>Web Apps</span> or even...</h3>
//       <h3><span>...Voice apps</span> are all within my fingertips,<br/> I just have to start typing</h3>
//     </AboutInfo>
//   </AboutInfoDiv>
// </AboutContainer>
