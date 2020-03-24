import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import {Container} from '@material-ui/core';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
    </div>
    );
}

export default App;
