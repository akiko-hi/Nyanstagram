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
    caption: string,
    email: string
}

export type UserInfo = {
    user_id: number,
    user_name: string,
    profile_img: string,
    caption: string
}

export type MyPost = {
    img: string
}

export type Comment = {
    user: User
    comment: string
    date: number
}

export type UserPageType = {
    user: UserInfo
    post: PostInfo[]
}