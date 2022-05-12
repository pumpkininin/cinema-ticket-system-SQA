import React from 'react';
import YouTube from 'react-youtube';
import Modal from "../../UI/Modal"

const Trailer = (props) => {
    const onReady = (event) => {
        event.target.playVideo();
    }

    const opts = {
        height: '540',
        width: '930',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return <Modal onClose ={props.onClose}>
        <YouTube videoId={props.videoId} opts={opts} onReady={onReady} />
    </Modal>
}
export default Trailer;