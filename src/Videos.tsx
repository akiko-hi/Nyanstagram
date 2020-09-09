import React from 'react';
import './Videos.scss';
import ProfilePic from './images/mugi.png';


export default function Videos() {
    return <div className="Videos">

       <VideoPost />

    </div>
}

function VideoPost() {
    return <div className="VideoPost">

        <img className="profile_img video" src={ProfilePic} alt="profile" />
        <p className="user_name">Amazing Mugi</p>

    </div>
}