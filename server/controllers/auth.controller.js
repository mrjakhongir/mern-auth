import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export async function signupController(req, res) {
	const { username, email, password } = req.body;
	const hashedPassword = bcryptjs.hashSync(password, 10);
	const newUser = new User({ username, email, password: hashedPassword });
	try {
		await newUser.save();
		res.status(201).json({ message: 'User created successfully' });
	} catch (err) {
		res.status(500).json(err.message);
	}
}
