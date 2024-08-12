import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();
app.use(express.json());
dotenv.config();

mongoose
	.connect(process.env.MONGO)
	.then(() => {
		console.log('Connected to mongoDB');
	})
	.catch((err) => {
		console.log(err);
	});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
	console.log('Server listening on port 3000.');
});

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	return res.status(statusCode).json({
		success: false,
		message,
		statusCode,
	});
});
