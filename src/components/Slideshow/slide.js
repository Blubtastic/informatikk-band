import React from 'react'
import './slideshow.css';

const Slide = ({ image }) => {
  const photo = require('../../images/slideshow/' + image);
  return <div className="slide">
    <img src={photo} alt="voluntary-work"/>
  </div>
}

export default Slide
