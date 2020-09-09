import MugiPic from './images/mugi.png';
import SumiPic from './images/sumi.png';
import MugiPost1 from './images/mugi_post1.jpg';
import SumiPost1 from './images/sumi_post1.jpg';

export type PostInfo = {
    userName: string
    profileImg: string
    postImg: string
}

export type User = {
    userName: string

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

export async function getPosts(): Promise<PostInfo[]> {
    return posts
}