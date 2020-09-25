import React, { useState, useEffect } from 'react';
import './Posts.scss';
import EditBtn from './images/edit_btn.png'
import { PostInfo, Comment } from './types';
import { postComment, getComments } from './api';
import AccountContainer from './AccountContainer';
import { Link } from 'react-router-dom';

type PostProps = {
    post: PostInfo
}

export default function Post({ post }: PostProps) {

    const [comment, setComment] = useState("")
    const [allComments, setAllComments] = useState<Comment[]>([])
    const [showModal, setShowModal] = useState(false)
    const firstTwoComments = allComments.slice(0, 2)

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
        <button className="view_all_comments" onClick={() => setShowModal(true)}>View all {allComments.length} comments</button>
        <div className="comments_wrapper">
            {firstTwoComments.map(comment => <div className="comment_container">
                <p className="comment_comment">
                    <span className="comment_user">{comment.user.user_name}</span>
                    {comment.comment}</p>
            </div>)}
        </div>
        <div className="comment_section">
            <textarea onChange={e => setComment(e.currentTarget.value)} value={comment} placeholder="Say meow to this post"></textarea>
            <button className="post_btn" onClick={() => postComment(post.id, comment)}>Post</button>
        </div>

        {showModal &&
            <div className="Modal" onClick={() => setShowModal(false)}>
                <div className="modal_container">
                    <img className="post modal" src={post.postImg} alt="post" />
                    <div className="comments_wrapper grid">
                        <AccountContainer img={post.user.profile_img} userName={post.user.user_name} caption={post.user.caption} />
                        <div>
                        {allComments.map(comment => <div className="comment_container">
                            <p className="comment_comment">
                                <span className="comment_user">{comment.user.user_name}</span>
                                {comment.comment}</p>
                        </div>)}
                        </div>
                        <div className="buttons_wrapper">
                            <button className="like_btn"><span role="img" aria-label="like">🤍</span></button>
                            <button><span role="img" aria-label="comment">💭</span></button>
                            <button><span role="img" aria-label="share">🎈</span></button>
                            <button className="favorite_btn"><span role="img" aria-label="favorite">😻</span></button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>

}
