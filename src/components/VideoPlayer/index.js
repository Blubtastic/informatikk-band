import React, {Component} from 'react'
import YouTube from 'react-youtube';

export default class VideoPlayer extends Component {
  render() {
    const opts = {
      height: '360',
      width: '640',
      playerVars: { // https://www.youtube.com/embed/Ba0Rlal7ayI
        autoplay: 1,
        showinfo: 0,
        rel: 0,

      }
    };

    return (
      <YouTube
        videoId="K6S2IfXGy88"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}
