import React, {useEffect, useState} from 'react';
import computer from './img/pc-tran.png';

export default function Banner(props) {
    
    return (
      <div className="banner-group">
        <div className="banner">
          <div>
            <img src={computer}/>
            <h1>Brian Uyeda</h1>
            <h2>Software Engineer</h2>
          </div>
          <div>
            <a>LinkedIn</a>
            <a>Github</a>
          </div>
        </div>
        <div className="about-me">
          <p>
            I'm a software engineer looking for work. The website is designed like my approach to solutions:
            clean and efficient.
          </p>
        </div>
      </div>
    )
}