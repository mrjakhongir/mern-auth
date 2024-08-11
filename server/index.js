import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';

const app = express();
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

app.listen(3000, () => {
	console.log('Server listening on port 3000.');
});
