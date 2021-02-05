import React from 'react';
import ProjectBox from './ProjectBox';

export default function ProjectsGroup(props) {
  return (
    <div className="projects-group">
      <ProjectBox/>
      <ProjectBox/>
    </div>
  )
}