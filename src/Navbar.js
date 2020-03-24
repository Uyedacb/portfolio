import React, {useEffect, useState} from 'react';
import computer from './img/pc-tran.png';
import {Button} from '@material-ui/core';
import resume from './assets/resume-uyeda.pdf';
import {Container} from '@material-ui/core';

export default function Navbar(props) {
  return (
      <Container variant="nav" className="navbar">
        <ul className="nav-links">
          <li id="nav-img">
            <a>
              <img src={computer}/>
            </a>
          </li>
          <li>
            <a target="_blank" href={resume}>
            RESUME
            </a>
          </li>
          <li>
            <a>
            WORK
            </a>
          </li>
        </ul>
      </Container>
  )
}