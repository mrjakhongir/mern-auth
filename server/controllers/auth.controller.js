import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export async function signupController(req, res, next) {
	const { username, email, password } = req.body;
	const hashedPassword = bcryptjs.hashSync(password, 10);
	const newUser = new User({ username, email, password: hashedPassword });
	try {
		await newUser.save();
		res.status(201).json({
			message: 'User created successfully',
			success: true,
			statusCode: 201,
		});
	} catch (err) {
		next(err);
	}
}

export async function signinController(req, res, next) {
	const { email, password } = req.body;
	try {
		const validUser = await User.findOne({ email });
		if (!validUser) {
			return next(errorHandler(404, 'User not found'));
		}

		const validPassword = bcryptjs.compareSync(password, validUser.password);
		if (!validPassword) {
			return next(errorHandler(401, 'Incorrect email or password'));
		}

		const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
		const { password: hashedPassword, ...user } = validUser._doc;
		const expityDate = new Date(Date.now() + 86400000);
		res
			.cookie('access_token', token, { httpOnly: true, expires: expityDate })
			.status(200)
			.json(user);
	} catch (err) {
		next(err);
	}
}

export async function signinGoogleController(req, res, next) {
	const { email, username, photo } = req.body;
	try {
		const validUser = await User.findOne({ email });

		if (validUser) {
			const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
			const { password: hashedPassword, ...rest } = validUser._doc;
			const expiryDate = new Date(Date.now() + 86400000);
			res
				.cookie('access_token', token, { httpOnly: true, expires: expiryDate })
				.status(200)
				.json(rest);
		} else {
			try {
				const generatedPassword =
					Math.random().toString(36).slice(-8) +
					Math.random().toString(36).slice(-8);

				const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

				const newUser = new User({
					username:
						username.split(' ').join('').toLowerCase() +
						Math.floor(Math.random() * 10000).toString(),
					email,
					password: hashedPassword,
					profilePicture: photo,
				});

				await newUser.save();

				const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
				const { password: hashedPassword2, ...rest } = validUser._doc;
				const expityDate = new Date(Date.now() + 86400000);
				res
					.cookie('access_token', token, {
						httpOnly: true,
						expires: expityDate,
					})
					.status(200)
					.json(rest);
			} catch (err) {
				next(err);
			}
		}
	} catch (err) {
		next(err);
	}
}
