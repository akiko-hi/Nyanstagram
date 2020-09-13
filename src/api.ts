import MugiPic from './images/mugi.png';
import SumiPic from './images/sumi.png';
import MugiPost1 from './images/mugi_post1.jpg';
import MugiPost2 from './images/mugi_post2.jpg';
import MugiPost3 from './images/mugi_post3.jpg';
import SumiPost1 from './images/sumi_post1.jpg';
import { PostInfo, MyPost, User, Comment } from './types';


const posts = [
    {
        id: 1,
        userName: "amazing mugi",
        profileImg: MugiPic,
        postImg: MugiPost1,
    },
    {
        id: 2,
        userName: "sumi the best",
        profileImg: SumiPic,
        postImg: SumiPost1
    }
]

const myPosts = [
    { img: MugiPost1 },
    { img: MugiPost2 },
    { img: MugiPost3 }
]

function post(body: any): RequestInit | undefined {
    return {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
    };
}

//post
export async function getPosts(): Promise<PostInfo[]> {
    return posts
}

export async function getMyPosts(): Promise<MyPost[]> {
    return myPosts
}

//comment
export async function postComment(post_id: number, comment: string) {
    await fetch(`/api/post/${post_id}/comments`, post({ comment }))
}

export async function getComments(post_id: number): Promise<Comment[]> {
    const res = await fetch(`/api/post/${post_id}/comments`)
    return res.json()
}

//user
export async function whoAmI(): Promise<User | null> {
    const res = await fetch('/api/whoAmI')
    return res.json()
}
