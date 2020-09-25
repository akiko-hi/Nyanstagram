import React, { useState, useEffect } from 'react';
import './Posts.scss';
import EditBtn from './images/edit_btn.png'
import { PostInfo, Comment } from './types';
import { postComment, getComments } from './api';

type PostProps = {
    post: PostInfo
}

export default function Post({ post }: PostProps) {

    const [comment, setComment] = useState("")
    const [allComments, setAllComments] = useState<Comment[]>([])

    useEffect(() => {
        load()

        async function load() {
            const res = await getComments(post.id)
            setAllComments(res)
        }
    }, [post.id])

    return <div className="Post">

        <div className="post_header">
            <Link className="user_link" to={`/user/${post.user.id}`}>
            <img className="profile_img" src={post.user.profile_img} alt="profile" />
            <p>{post.user.user_name}</p>
            </Link>
            <img className="edit_post" src={EditBtn} alt="edit" />
        </div>

        <img className="post" src={post.postImg} alt="post" />

        <div className="buttons_wrapper">
            <button className="like_btn"><span role="img" aria-label="like">🤍</span></button>
            <button><span role="img" aria-label="comment">💭</span></button>
            <button><span role="img" aria-label="share">🎈</span></button>
            <button className="favorite_btn"><span role="img" aria-label="favorite">😻</span></button>
        </div>
        <div>{post.caption}</div>
        <div className="view_all_comments">{allComments.map(comment => <div>{comment.comment}</div>)}</div>
        <div className="comment_section">
            <textarea onChange={e => setComment(e.currentTarget.value)} value={comment} placeholder="Say meow to this post"></textarea>
            <button className="post_btn" onClick={() => postComment(post.id, comment)}>Post</button>
        </div>
    </div>
}
