import React, {Component} from 'react';

import Googlemaps from '../Googlemaps';

export default class Footer extends Component {

  render() {
    return(
      <div className="section footer" id="kontakt">
        <div className="sectionContent">

          <div className="footerLinks">
            <a href="https://www.facebook.com/outputntnu">facebook.com/outputntnu</a>
            <p>band@online.ntnu.no</p>
          </div>
          <Googlemaps />

        </div>
      </div>
    )
  }
}
