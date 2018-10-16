import React, {Component} from 'react'

import LandingSection from '../Sections/LandingSection';
import AboutUs from '../Sections/AboutUs';
import MusicVideo from '../Sections/MusicVideo';
import Slideshow from '../Slideshow';

import Footer from '../Footer';

export default class Home extends Component {

  render() {
    return(
      <div className="scrollContainer">
        <div id="top">
          <LandingSection />

          <AboutUs />
          <MusicVideo />

          <Footer />
        </div>
      </div>
    )
  }
}
