import React, {useEffect, useState} from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import {Container} from '@material-ui/core';

export default function Header(props) {
  return (
    <div className="banner-group">
      <Banner/>
    </div>
  )
}