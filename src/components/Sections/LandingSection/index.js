import React, {Component} from 'react';
import Nav from '../../Nav';
import Slideshow from '../../Slideshow';


export default class LandingSection extends Component {

  render() {
    return(
      <div className="cover-img">
        <Nav/>
        <Slideshow />
      </div>
    )
  }
}
