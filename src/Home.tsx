import React, { useState, useEffect } from "react";
import './Home.scss';
import Post from './Post';
import AccountContainer from './AccountContainer';
import { getPosts, PostInfo } from './api';
import ProfilePic from './images/mugi.png';

export default function Home() {


    const [posts, setPosts] = useState<PostInfo[]>([])

    useEffect(() => {
        load()

        async function load() {
            const allPosts = await getPosts()
            setPosts(allPosts)
        }
    }, [])
    
    return <div className="Home">
        <div className="main_wrapper posts">
            <div className="videos_section">
                <div className="video_post">
                    <img className="profile_img video" src={ProfilePic} alt="profile" />
                    <p className="user_name">Amazing Mugi</p>
                </div>
            </div>

            <div className="posts_section">
                {posts.map(post => <Post post={post} />)}

            </div>

        </div>

        <div className="main_wrapper side">

            <AccountContainer img="mugi.png" userName="AmazingMugi" caption="Mugi Hirai" />
            <div className="suggestions">
                <p>Suggestions For You</p>
                <button className="see_all_btn">See All</button>
            </div>

            <AccountContainer img="mugi.png" userName="AmazingMugi" caption="Mugi Hirai">
                <button className="follow_btn">Follow</button>
            </AccountContainer>

        </div>
    </div>
}