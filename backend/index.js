import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/user.route.js'
dotenv.config()

mongoose
  .connect(
    'mongodb+srv://Nusratov_Jahongir:jahongir96@mern.ahgse9p.mongodb.net/mern-auth?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MONGODB')
    app.listen(3000, () => {
      console.log('App is running on port: 3000')
    })
  })
  .catch((err) => console.log(err))

const app = express()

app.get('/', userRouter)
