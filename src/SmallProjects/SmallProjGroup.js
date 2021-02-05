import React from 'react';
import SmallProjBox from './SmallProjBox';

export default function SmallProjGroup(props) {
  return (
    <section className="container">
      <div className="small-projects-group">
        <SmallProjBox/>
        <SmallProjBox/>
        <SmallProjBox/>
      </div>
    </section>
  )
}