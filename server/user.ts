import { openDB } from "./db";
import { Request } from 'express';
import { UserPageType } from './types';
export async function whoAmI(req: Request) {
    // const userId = req.session!.userId
    // if (!userId) { return }

    const userId = 1
    const db = await openDB()
    return await db.get("select id, user_name, profile_img from User where id = ?", userId)
}

export async function logIn(req: Request) {
    const { user_name, email } = req.body
    const db = await openDB()
    return await db.get('select id, user_name, profile_img from User where user_name = ? and emai = ?', user_name, email)
}

export async function getUserPage(req: Request) {
    const { user_id } = req.params
    if (user_id === undefined) {
        return undefined
    }

    const db = await openDB()
    const res = await db.all(`
    select u.id user_id, u.user_name, u.profile_img, 
    p.id  post_id, p.postImg, p.date, p.caption from User u
    join Post p on p.user_id = u.id 
    where u.id = ?`, user_id)


    return {
        user: {
            id: res[0].user_id,
            user_name: res[0].user_name,
            profile_img: res[0].profile_img,
            caption: res[0].caption
        },
        post: res.map(row => ({
            id: row.post_id,
            postImg: row.postImg,
            date: row.date,
            caption: row.caption
        }))
    }
}
