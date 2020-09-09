import React, { useState, useEffect } from "react";
import './Home.scss';
import Post from './Post';
import AccountContainer from './AccountContainer';
import { getPosts, PostInfo } from './api';
import Videos from "./Videos";
import ProfilePic from './images/mugi.png';
import ProfilePicSumi from './images/sumi.png';

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
            <Videos />

            <div className="posts_section">
                {posts.map(post => <Post post={post} />)}
            </div>

        </div>

        <div className="main_wrapper side">

            <AccountContainer img={ProfilePic} userName="AmazingMugi" caption="Mugi Hirai" />

            <div className="suggestion_block">
                <div className="suggestions">
                    <p>Suggestions For You</p>
                    <button className="see_all_btn">See All</button>
                </div>

                <AccountContainer img={ProfilePicSumi} userName="Sumi_the_best" caption="Sumi Hirai">
                    <button className="follow_btn">Follow</button>
                </AccountContainer>
            </div>

        </div>
    </div>
}