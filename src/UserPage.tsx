import React, { useState, useEffect } from 'react';
import './Profile.scss';
import { getUserPage } from './api';
import { UserPageType } from './types';
import { useParams } from 'react-router';

export default function UserPage() {

    const { id } = useParams()
    const [user, setUser] = useState<UserPageType>()

    useEffect(() => {
        load()

        async function load() {
            const res = await getUserPage(id)
            setUser(res)
        }
    }, [id])


    return <div className="Profile">
        {user === undefined ? <div>loading...</div>
            :
            <div className="profile_outer_container">
                <div className="profile_outer_wrapper">
                    <img className="profile_img" src={user.user.profile_img} alt="profile" />
                    <div className="profile_inner_wrapper">
                        <div className="account_detail">
                            <div className="user_name_profile">{user?.user.user_name}</div>
                            <button className="edit_btn">
                                {/* <img className="edit_icon" src={Setting} alt="edit button" /> */}
                        Edit Profile
                            </button>
                        </div>
                        <div className="number_info">
                            <div>3 posts</div>
                            <div>0 followers</div>
                            <div>0 following</div>
                        </div>
                        <div className="caption">{user?.user.caption}</div>
                    </div>
                </div>
                <div className="posts_gallery">
                    {user?.post.length === 0 ?
                        // <img className="spinner" src={Spinner} alt="loading" />
                        <div>loading</div>
                        :
                        user?.post.map(post => <img className="post_img" src={post.postImg} alt="post" />)}
                </div>
            </div>}
    </div>
}