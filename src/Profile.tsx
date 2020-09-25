import React, { useEffect, useState } from 'react';
import './Profile.scss';
import Setting from "./images/setting.png";
import ProfilePic from './images/mugi.png';
import { getMyPosts } from './api';
import { MyPost } from './types';
import Spinner from './images/spinner.png';

export default function Profile() {

    const [myPosts, setMyPosts] = useState<MyPost[]>([])

    useEffect(() => {
        load()

        async function load() {
            const res = await getMyPosts()
            setMyPosts(res)
        }
    })

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
                {myPosts.length === 0 ?
                <img className="spinner" src={Spinner} alt="loading"/> 
                :
                myPosts.map(myPost => <img className="post_img" src={myPost.img} alt="post" />)}
            </div>
        </div>
    </div>
}