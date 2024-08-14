import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';

import SocialApps from './SocialApps';
import Text from './Text';
import Title from './Title';

import { signInStart, signInSuccess, signInFailure } from '../redux/userSlice';
import { RootState } from '../redux/store';

type LoginFormProps = {
	toggleWelcome: boolean;
};

interface UserData {
	email: string;
	password: string;
}

function LoginForm({ toggleWelcome }: LoginFormProps) {
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	const form = useForm<UserData>({
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const { register, handleSubmit, reset } = form;

	async function handleForm(formData: UserData) {
		dispatch(signInStart());

		try {
			const res = await fetch('/api/auth/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			if (!data.username) {
				dispatch(signInFailure(data.message));
				return;
			}

			dispatch(signInSuccess(data));
			reset();
			navigate('/');
		} catch (err) {
			dispatch(signInFailure(error));
		}
	}

	return (
		<div
			className={`absolute z-20 top-10 md:top-0 px-10 md:px-0 grid md:place-content-center w-full md:w-[60%] h-full transition-all duration-300 ${
				toggleWelcome &&
				'translate-y-full md:translate-y-0 md:translate-x-[20%] opacity-0'
			}`}>
			<form
				className='h-full flex flex-col gap-3 min-w-[350px]'
				onSubmit={handleSubmit(handleForm)}>
				<Title content='Sign In' theme='light' />
				<SocialApps />
				<Text content='or use your account' theme='light' />
				<div className='flex flex-col gap-6'>
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
				<p className='text-red-700 text-center'>{error && error}</p>
				<button
					className={`uppercase text-white text-sm font-semibold bg-[#141e30] self-center rounded-full py-2 px-8 transition-all border mt-5 hover:bg-white hover:text-[#131e30] border-[#131e30] ${
						loading && 'opacity-80 cursor-not-allowed'
					}`}>
					{loading ? 'Signing in' : 'Sign in'}
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
