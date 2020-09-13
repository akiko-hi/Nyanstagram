import { openDB } from "./db";
import { Request } from 'express';

export async function whoAmI(req: Request) {
    // const userId = req.session!.userId
    // if (!userId) { return }

    const userId = 1
    const db = await openDB()
    return await db.get("select id, user_name, profile_img from User where id = ?", userId)
}