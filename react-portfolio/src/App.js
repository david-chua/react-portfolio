import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/experience' component={Experience} />
    </div>
  );
}

export default App;
