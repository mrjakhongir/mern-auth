import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body
  const hashedPassword = bcryptjs.hashSync(password, 10)
  const newUser = new User({ username, email, password: hashedPassword })
  try {
    await newUser.save()
    res.status(201).json({ message: 'user account created' })
  } catch (err) {
    next(err)
  }
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const validUser = await User.findOne({ email })
    if (!validUser) {
      return next(errorHandler(404, 'User not found'))
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) {
      return next(errorHandler(401, 'Email or password incorrect!'))
    }
    const token = jwt.sign({ id: validUser._id }, 'jahongir96')
    const { password: hashedPassword, ...rest } = validUser._doc
    const expiryDate = new Date(Date.now() + 3600000)
    res
      .cookie('access_token', token, {
        httpOnly: true,
        expires: expiryDate,
        sameSite: true,
        secure: true,
      })
      .status(200)
      .json(rest)
  } catch (err) {
    next(err)
  }
}
