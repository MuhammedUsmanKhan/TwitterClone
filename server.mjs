import express from 'express'
const app = express()
const PORT = process.env.PORT || 3002;
import path from 'path';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'
import 'dotenv/config';
const __dirname = path.resolve();
//app.use(express.json());


import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'


app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));


app.use('/api/v1', authRouter)

////////////////////Checking if the token is valid//////////////////////
app.use('/api/v1',(req, res, next) => {

  console.log("here lesg")
  console.log("Cookie :", req.cookies)
  const token = req.cookies.token;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("Decoded :", decoded)
    req.body.decoded = {
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      isAdmin: decoded.isAdmin,
    }
    next()
  } catch (err) {
    // err
    console.log(err)
    // res.redirect(path.join(__dirname, './reactcrudapp/build'));
    res.status(401).send({ message: "invalid Token" })
  }

})

app.use('/api/v1', postRouter)

app.use('/api/v1/ping', (req, res) => {
  res.send("OK");
})

app.use('/', express.static(path.join(__dirname, 'reactcrudapp/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/reactcrudapp/build/index.html'))
    // res.redirect('/');
})

app.use(express.static(path.join(__dirname, './reactcrudapp/build')))


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})