import React from 'react';
import dubs from "../img/thicc-lil-dubs.png";

export default function ProjectBox(props) {
  return (
    <div className="projectprev-box">
      <div className="projectprev-img">
        <img src={dubs}>
        </img>
      </div>
      <div className="projectprev-box-text">
        <h3>PROPS TITLE</h3>
        <p>PROPS DESCRIPTION</p>
      </div>
    </div>
  )
}