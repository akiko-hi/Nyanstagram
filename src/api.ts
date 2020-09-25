import MugiPic from './images/mugi.png';
import SumiPic from './images/sumi.png';
import MugiPost1 from './images/mugi_post1.jpg';
import MugiPost2 from './images/mugi_post2.jpg';
import MugiPost3 from './images/mugi_post3.jpg';
import SumiPost1 from './images/sumi_post1.jpg';
import { PostInfo, MyPost, User } from './types';


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

//post
export async function getPosts(): Promise<PostInfo[]> {
    return posts
}

export async function getMyPosts(): Promise<MyPost[]> {
    return myPosts
}

//user
export async function whoAmI(): Promise<User | null> {
    const res = await fetch('/api/whoAmI')
    return res.json()
}
