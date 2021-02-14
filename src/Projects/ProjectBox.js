import React from 'react';
import dubs from "../img/thicc-lil-dubs.png";

export default function ProjectBox(props) {
  return (
    <div className="projectprev-box">
        <img src={require("../img/" + props.img)}>
        </img>
      <div className="projectprev-box-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}