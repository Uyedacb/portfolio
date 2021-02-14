import React from 'react';
import LinkedIn from '../assets/icons/linkedin.svg';
import ResumeIcon from '../assets/icons/resume.png';
import Resume from '../assets/resume-uyeda.pdf';

export default function Banner(props) {
    return (
      <div className="banner">
          <div>
            <h1>Brian Uyeda</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className="banner-links">
            <a target="_blank" href="https://www.linkedin.com/in/uyedacb/" rel="noopener noreferrer"> 
              <img src={LinkedIn} alt="a link to my linkedin page"></img>
            </a>
            <a target="_blank" href="https://github.com/Uyedacb" rel="noopener noreferrer">
              <img src={require('../assets/icons/GitHub-Mark-32px.png')} alt="a link to my github page"></img>
            </a>
            <a target="blank" href={Resume}  rel="noopener noreferrer">
              <img src={ResumeIcon} alt="a link to a pdf of my resume"></img>
            </a>
          </div>
      </div>
    )
}