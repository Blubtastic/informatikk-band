import React, {Component} from 'react'

import logo from '../../images/logo.png';
import band from "../../images/band.jpg"
import members from "../../images/members.jpg"
import profile from "../../images/profile.png"

import LandingSection from '../Sections/LandingSection';
import AboutUs from '../Sections/AboutUs';
import MusicVideo from '../Sections/MusicVideo';
import Concerts from '../Sections/Concerts';
import Footer from '../Footer';

export default class Home extends Component {

  render() {
    return(
      <div className="scrollContainer">
        <div id="top">
          <LandingSection />

          <AboutUs />
          <MusicVideo />
          <Concerts />

          <Footer />
        </div>
      </div>
    )
  }
}
