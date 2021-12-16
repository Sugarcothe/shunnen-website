import React from 'react';
import YouTube from 'react-youtube';

class ClassesYoutube extends React.Component {
    VideoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

  render() {
    const opts = {
      height: '400',
      width: '650',
      marginTop: '5rem',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const {videoId} = this.props
    return <YouTube 
            videoId={videoId}
            opts={opts} 
            onReady={this.VideoOnReady} 
        />;
  }
}

export default ClassesYoutube;

