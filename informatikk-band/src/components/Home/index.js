import React, {Component} from 'react'
import Nav from '../Nav'

import band from "../../images/band.jpg"

export default class Home extends Component {

  render() {
    return(
      <div>
        <Nav/>
        <div className="cover-img">
          <h1>Velkommen til Online sitt feteste linjeband!</h1>
        </div>
        <div className="content">
          <h1>More shit coming soon</h1>
        </div>
      </div>
    )
  }
}
