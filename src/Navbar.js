import React, {useEffect, useState} from 'react';
import computer from './img/pc-tran.png';
import {Button} from '@material-ui/core';

export default function Navbar(props) {
  return (
    <header className="navbar">
      <img src={computer}/>
      <Button/>
    </header>
  )
}