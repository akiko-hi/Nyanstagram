import React from 'react';
import './Posts.scss';
import EditBtn from './images/edit_btn.png'
import { PostInfo } from './api';

type PostProps = {
    post: PostInfo
}

export default function Post({ post }: PostProps) {
    return <div className="Post">

        <div className="post_header">
            <img className="profile_img" src={post.profileImg} alt="profile" />
            <p>{post.userName}</p>
            <img className="edit_post" src={EditBtn} alt="edit" />
        </div>

        <img className="post" src={post.postImg} alt="post" />

        <div className="buttons_wrapper">
            <button className="like_btn"><span role="img" aria-label="like">🤍</span></button>
            <button><span role="img" aria-label="comment">💭</span></button>
            <button><span role="img" aria-label="share">🎈</span></button>
            <button className="favorite_btn"><span role="img" aria-label="favorite">😻</span></button>
        </div>
        <div>captions</div>
        <div className="view_all_comments">View all comments</div>
        <div className="comment_section">
            <textarea placeholder="Say meow to this post"></textarea>
            <button className="post_btn">Post</button>
        </div>
    </div>
}
