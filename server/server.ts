import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express, { Request, Response } from 'express';
import path from "path";
import { whoAmI } from './user';
import { postComment, getComments }  from './comment'

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

function action(func: (req: Request) => Promise<any>) {
    return function (req: Request, res: Response) {
        func(req)
            .then(x => res.json(x))
            .catch(err => res.status(500).send(err.message))
    }
}

//server configuration
app.use(cookieSession({ secret: "Akiko123", sameSite: "lax" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")))
app.use('/static', express.static(path.join(__dirname, 'static')))

//user
app.get('/api/whoAmI', action(whoAmI))

//post
app.get('/api/post/:post_id/comments', action(getComments))
app.post('/api/post/:post_id/comments', action(postComment))

// app.get('*', (req, res, next) => {
// 	res.sendFile(path.join(__dirname, 'index.html'))
// })