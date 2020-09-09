import React from 'react';
import './Profile.scss';
import Setting from "./images/setting.png";
import ProfilePic from './images/mugi.png';
import Post1 from "./images/mugi_post1.jpg";
import Post2 from "./images/mugi_post2.jpg";
import Post3 from "./images/mugi_post3.jpg";

export default function Profile() {
    return <div className="Profile">

        <div className="profile_outer_container">
            <div className="profile_outer_wrapper">
                <img className="profile_img" src={ProfilePic} alt="profile" />
                <div className="profile_inner_wrapper">
                    <div className="account_detail">
                        <div className="user_name_profile">AmazingMugi</div>
                        <button className="edit_btn">
                            <img className="edit_icon" src={Setting} alt="edit button" />
                    Edit Profile
                </button>
                    </div>
                    <div className="number_info">
                        <div>3 posts</div>
                        <div>0 followers</div>
                        <div>0 following</div>
                    </div>
                    <div className="caption">Mugi Hirai</div>
                </div>
            </div>
            <div className="posts_gallery">
                <img src={Post1} alt="post" />
                <img src={Post2} alt="post" />
                <img src={Post3} alt="post" />
            </div>
        </div>
    </div>
}