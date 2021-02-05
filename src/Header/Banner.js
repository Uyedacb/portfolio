import React from 'react';
import {Container} from '@material-ui/core';

export default function Banner(props) {
    return (
      <Container variant="div" className="banner">
          <div>
            <h1>Brian Uyeda</h1>
            <h2>Software Engineer</h2>
          </div>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/uyedacb/">LinkedIn</a>
            <a target="_blank" href="https://github.com/Uyedacb">Github</a>
          </div>
      </Container>
    )
}