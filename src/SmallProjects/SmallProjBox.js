import React, {useState} from 'react';

export default function SmallProjBox(props) {
  const [hover, handleHover] = useState(false);
  return (
    <a className="small-project-box" href={props.github} target="_blank">
      <img src={require('../assets/icons/GitHub-Mark-32px.png')} className="small-project-img"></img>
      <h3 className="small-project-items">{props.title}</h3>
      <p className="small-project-items">{props.description}</p>
      <p className="small-project-tech">{props.tech}</p>
    </a>
  )
}