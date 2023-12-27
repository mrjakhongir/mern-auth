import express from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

mongoose
  .connect(
    'mongodb+srv://Nusratov_Jahongir:jahongir96@mern.ahgse9p.mongodb.net/mern-auth?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MONGODB')
  })
  .catch((err) => console.log(err))

const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log('App is running on port: 3000')
})

app.use('/api/user', userRoute)

app.use('/api/auth', authRoute)
