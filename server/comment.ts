import { openDB } from "./db";
import { Request } from 'express';

export async function postComment(req: Request) {
    const userId = 2
    const db = await openDB()
    await db.run('insert into Comment (date, user_id, comment, post_id) values (?, ?, ?, ?)', Date.now(), userId, req.body.comment, req.params.post_id)
}

export async function getComments(req: Request)  {
    const db = await openDB()
    const rows = await db.all(`
    select c.user_id, c.comment, c.date, u.user_name, u.profile_img, u.email
    from Comment c 
    join User u on u.id = c.user_id
    where c.post_id = ?`, 
    req.params.post_id)

    return rows.map(row => ({
        user: {
            id: row.user_id,
            user_name: row.user_name,
            profile_img: row.profile_img,
            email: row.email
        },
        comment: row.comment,
        date: row.date
    }))
}