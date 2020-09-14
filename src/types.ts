export type PostInfo = {
    id: number
    postImg: string
    date: string
    caption: string
    user: User
}

export type User = {
    id: number,
    user_name: string,
    profile_img: string,
    email: string
}

export type MyPost = {
    img: string
}

export type Comment = {
    user_id: number,
    comment: string
}