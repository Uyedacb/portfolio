import React from 'react';

export default function SmallProjBox(props) {
  return (
    <a className="small-project-box" href={props.github} target="_blank" rel="noopener noreferrer">
      <img src={require('../assets/icons/GitHub-Mark-32px.png')} className="small-project-img" alt="github icon"></img>
      <h3 className="small-project-items">{props.title}</h3>
      <p className="small-project-items">{props.description}</p>
      <p className="small-project-tech">{props.tech}</p>
    </a>
  )
}