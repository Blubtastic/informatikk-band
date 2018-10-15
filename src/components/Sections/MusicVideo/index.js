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
              <p>Vårt første cover av Plug in Baby - Muse</p>
              <div className="videoPlayer">
                <div onClick={()=>{ this.setState({showVideo: true}) }}><img src={playIcon} alt="play"/></div>
                <h3>PLAY VIDEO</h3>
              </div>
            </div>
          </div>
        </div>
      )

    }
    else{
      return (
        <div className="section youtubeBackground " id="om-oss">
          <div className="shadedDarker">
            <div className="sectionContent musicVideo">
              <h1>Musikkvideo</h1>
              <p>Vårt første cover av Plug in Baby - Muse</p>
              <div className="videoPlayer">
                <VideoPlayer/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
