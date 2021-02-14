import React from 'react';
import SmallProjBox from './SmallProjBox';

export default function SmallProjGroup(props) {
  let smallProjList = require('../assets/smallprojs.json');
  return (
    <section className="container">
      <div className="small-projects-group">
        {smallProjList.map(item => (<SmallProjBox title={item.title} description={item.description} tech={item.tech} github={item.github}/>))}
      </div>
    </section>
  )
}