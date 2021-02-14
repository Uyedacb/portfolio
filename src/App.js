import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import SmallProjGroup from './SmallProjects/SmallProjGroup';

function App() {
  return (
    <div>
      <Header/>
      <div className="project-section">
        <div id="small-proj-header"><h2>Collection of Projects</h2></div>
        <SmallProjGroup/>
      </div>
    </div>
    );
}

export default App;
