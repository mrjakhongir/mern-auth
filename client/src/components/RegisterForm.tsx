import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailIcon from '@mui/icons-material/Email';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { Box, TextField } from '@mui/material';

import Title from './Title';
import SocialApps from './SocialApps';
import Text from './Text';

type RegisterFormProps = {
	toggleWelcome: boolean;
};

function RegisterForm({ toggleWelcome }: RegisterFormProps) {
	return (
		<div
			className={`absolute z-10 top-10 md:top-0 px-10 md:px-0 grid md:place-content-center w-full md:w-[60%] h-full transition-all duration-300 translate-y-full md:translate-y-0 opacity-0 ${
				toggleWelcome &&
				'translate-y-0 md:translate-x-2/3 opacity-100 z-50 md:animate-show'
			}`}>
			<form className='h-full flex flex-col gap-3 min-w-[350px]'>
				<Title content='Create Account' theme='light' />
				<SocialApps />
				<Text content='or use your email for registration' theme='light' />
				<div className='flex flex-col gap-6'>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<PersonRoundedIcon
							sx={{ color: 'action.active', mr: 1, my: 0.5 }}
						/>
						<TextField label='Name' variant='standard' className='w-full' />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
						<TextField label='Email' variant='standard' className='w-full' />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<HttpsRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
						<TextField label='Password' variant='standard' className='w-full' />
					</Box>
				</div>
				<button className='uppercase text-white text-sm font-semibold bg-[#141e30] self-center rounded-full py-2 px-8 transition-all border mt-5 hover:bg-white hover:text-[#131e30] border-[#131e30]'>
					Sign Up
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
