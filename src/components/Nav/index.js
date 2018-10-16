import React, {Component} from 'react'
import logo from '../../images/logo.png';

import "./nav.css";

export default class Nav extends Component {

  render() {
    return(
      <div className="container navbox">
        <div className="row">
          <div className="logo-container">
            <a href="#top" ><img src={logo} alt="logo"/></a>
          </div>
          <div className="nav-container">
            <nav className="nav">
              <ul>
                <li><a href="#om-oss" >Om</a></li>
                <li><a href="#musikkvideo" >Musikkvideo</a></li>
                <li><a href="#kontakt" >Kontakt</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
