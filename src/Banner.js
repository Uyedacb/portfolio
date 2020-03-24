import React, {useEffect, useState} from 'react';
import computer from './img/pc-tran.png';
import Navbar from './Navbar';
import {Container} from '@material-ui/core';

export default function Banner(props) {
    
    return (
      <Container variant="div" className="banner-group">
        <div className="banner">
          <div>
            <img src={computer}/>
            <h1>Brian Uyeda</h1>
            <h2>Software Engineer</h2>
          </div>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/uyedacb/">LinkedIn</a>
            <a target="_blank" href="https://github.com/Uyedacb">Github</a>
            <p style={{margin: "17rem 0rem 6rem"}}>
            I'm a software engineer looking for work. The website is designed like my approach to solutions:
            clean and efficient.
          </p>
          </div>
        </div>
      </Container>
    )
}