import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from '@material-ui/core';
import Header from './Header/Header';
import ProjectBox from './Projects/ProjectBox';
import ProjectsGroup from './Projects/ProjectsGroup';
import SmallProjGroup from './SmallProjects/SmallProjGroup';

function App() {
  return (
    <div>
      <Header/>
      <div className="project-section">
        <ProjectsGroup/>
        <div id="small-proj-header"><h2>Collection of Projects</h2></div>
        <SmallProjGroup/>
      </div>
    </div>
    );
}

export default App;
