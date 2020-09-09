import MugiPic from './images/mugi.png';
import SumiPic from './images/sumi.png';
import MugiPost1 from './images/mugi_post1.jpg';
import MugiPost2 from './images/mugi_post2.jpg';
import MugiPost3 from './images/mugi_post3.jpg';
import SumiPost1 from './images/sumi_post1.jpg';

export type PostInfo = {
    userName: string
    profileImg: string
    postImg: string
}

export type User = {
    userName: string
}

export type MyPost = {
    img: string
}

const posts = [
    {
        userName: "amazing mugi",
        profileImg: MugiPic,
        postImg: MugiPost1,
    },
    {
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

export async function getPosts(): Promise<PostInfo[]> {
    return posts
}

export async function getMyPosts(): Promise<MyPost[]> {
    return myPosts
}