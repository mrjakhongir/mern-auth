import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailIcon from '@mui/icons-material/Email';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import Title from './Title';
import SocialApps from './SocialApps';
import Text from './Text';
import { useState } from 'react';

type RegisterFormProps = {
	toggleWelcome: boolean;
};

interface UserData {
	username: string;
	email: string;
	password: string;
}

function RegisterForm({ toggleWelcome }: RegisterFormProps) {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const form = useForm<UserData>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	const { register, handleSubmit, reset } = form;

	async function handleForm(formData: UserData) {
		setLoading(true);
		setError(false);
		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();

			reset();
			setLoading(false);
			if (!data.success) {
				setError(true);
				return;
			}
		} catch (err) {
			setLoading(false);
			setError(true);
		}
	}

	return (
		<div
			className={`absolute z-10 top-10 md:top-0 px-10 md:px-0 grid md:place-content-center w-full md:w-[60%] h-full transition-all duration-300 translate-y-full md:translate-y-0 opacity-0 ${
				toggleWelcome &&
				'translate-y-0 md:translate-x-2/3 opacity-100 z-50 md:animate-show'
			}`}>
			<form
				className='h-full flex flex-col gap-3 min-w-[350px]'
				onSubmit={handleSubmit(handleForm)}>
				<Title content='Create Account' theme='light' />
				<SocialApps />
				<Text content='or use your email for registration' theme='light' />
				<div className='flex flex-col gap-6'>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<PersonRoundedIcon
							sx={{ color: 'action.active', mr: 1, my: 0.5 }}
						/>
						<TextField
							label='Username'
							variant='standard'
							className='w-full'
							{...register('username')}
						/>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
						<TextField
							label='Email'
							variant='standard'
							className='w-full'
							{...register('email')}
						/>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<HttpsRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
						<TextField
							label='Password'
							variant='standard'
							className='w-full'
							{...register('password')}
						/>
					</Box>
				</div>

				<p className='text-red-700 text-center'>
					{error && 'Something went wrong'}
				</p>

				<button
					disabled={loading}
					className={`uppercase text-white text-sm font-semibold bg-[#141e30] self-center rounded-full py-2 px-8 transition-all border mt-5 hover:bg-white hover:text-[#131e30] border-[#131e30] ${
						loading &&
						'opacity-75 cursor-not-allowed hover:bg-[#131e30] hover:text-white'
					}`}>
					{loading ? 'Signing Up' : 'Sign Up'}
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
