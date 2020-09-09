export type PostInfo = {
    userName: string
    profileImg: string
    postImg: string
}

const posts = [
    {
    userName: "amazing mugi",
    profileImg: "mugi.png",
    postImg: "mugi_post1"
},
{
    userName: "sumi the best",
    profileImg: "sumi.png",
    postImg: "sumi_post1"
}
]


export async function getPosts(): Promise<PostInfo[]> {
    return posts
}