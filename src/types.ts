export type PostInfo = {
    id: number
    userName: string
    profileImg: string
    postImg: string
}

export type User = {
    id: number,
    user_name: string,
    profile_img: string,
}

export type MyPost = {
    img: string
}

export type Comment = {
    user_id: number,
    comment: string
}