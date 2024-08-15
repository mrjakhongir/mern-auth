import express from 'express';
import {
	signinController,
	signinGoogleController,
	signupController,
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signupController);
router.post('/signin', signinController);
router.post('/google', signinGoogleController);

export default router;
