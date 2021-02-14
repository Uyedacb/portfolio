import React from 'react';
import ProjectBox from './ProjectBox';

export default function ProjectsGroup(props) {
  let projectList = require('../assets/projects.json');

  return (
    <div className="projects-group">
      {projectList.map(proj => (<ProjectBox title={proj.title} description={proj.description} tech={proj.tech} img={proj.img}/>))}
    </div>
  )
}