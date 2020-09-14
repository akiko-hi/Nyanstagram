import { openDB } from "./db";

export async function getPosts() {
    const db = await openDB()
    const rows = await db.all(`
    select 
    p.id, p.postImg, p.date, p.caption, p.user_id, 
    u.id u_user_id, u.user_name, u.profile_img
    from Post p
    join User u on p.user_id = u_user_id`)

    return rows.map(row => ({
            id: row.id,
            postImg: row.postImg,
            date: row.date,
            caption: row.caption,
            user: {
                id: row.u_user_id,
                user_name: row.user_name,
                profile_img: row.profile_img
            }
        })
    )
}