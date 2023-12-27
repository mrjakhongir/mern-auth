import express from 'express'
import { user } from '../controllers/user.controller.js'

const router = express.Router()

const userRoute = router.get('/', user)

export default userRoute
