import { openDB } from "./db";
import { Request } from 'express';

export async function postComment(req: Request) {
    const userId = 2
    const db = await openDB()
    await db.run('insert into Comment (date, user_id, comment, post_id) values (?, ?, ?, ?)', Date.now(), userId, req.body.comment, req.params.post_id)
}

export async function getComments(req: Request)  {
    const db = await openDB()
    return db.get('select user_id, comment, date from Comment where post_id = ?', req.params.post_id)
}