import React from 'react';
import './VideoPlayer.scss';
import fire from '../../assets/fire.mp4';


const VideoPlayer = () => {


    return (
        <div className="fullscreen-video-container">
            <div className="video-overlay" />
            <video
                src={fire}
                autoPlay
                loop
                muted
                playsInline
                className="fullscreen-video"
            />
        </div>
    );
};

export default VideoPlayer;
