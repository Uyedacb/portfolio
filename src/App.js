import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmCard from './cards/FilmCard';
import ProjectCard from './cards/ProjectCard';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
    );
}

export default App;
