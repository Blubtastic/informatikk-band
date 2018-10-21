import React, {Component} from 'react';

import Googlemaps from '../Googlemaps';
import facebook from '../../images/facebook.png';
import gmail from '../../images/gmail.png';

export default class Footer extends Component {

  render() {
    return(
      <div className="section footer" id="kontakt">
        <div className="sectionContent">

          <div className="footerLinks">
            <div>
              <img className="footerIcon" src={facebook} alt="facebook" />
              <a href="https://www.facebook.com/outputntnu">facebook.com/outputntnu</a>
            </div>
            <div>
              <img className="footerIcon" src={gmail} alt="facebook" />
              <p>band@online.ntnu.no</p>
            </div>
          </div>
          <Googlemaps />

        </div>
      </div>
    )
  }
}
