import React, {Component} from 'react';

import VideoPlayer from '../../VideoPlayer';

import playIcon from '../../../images/playIcon.png';

export default class MusicVideo extends Component {
  constructor(props){
    super(props);
    this.state = {
      showVideo: false,
    }

  }

  render() {
    //Returns the content for the "the mission" cover part.
    if (!this.state.showVideo){
      return (
        <div className="section youtubeBackground shadedDark" id="musikkvideo">
          <div className="shadedDark">
            <div className="sectionContent musicVideo">
              <h1>Musikkvideo</h1>
              <p>Første cover av Plug in Baby - Muse</p>
              <div className="playButton">
                <div onClick={()=>{ this.setState({showVideo: true}) }}>
                  <img src={playIcon} alt="play"/>
                  <h3>SPILL VIDEO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    }
    else{
      return (
        <div className="section youtubeBackground" id="musikkvideo">
          <div className="shadedDarker">
            <div className="sectionContent musicVideo">
              <h1>Musikkvideo</h1>
              <p>Første cover av Plug in Baby - Muse</p>
              <div className="youTubeContainer">
                <VideoPlayer/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
