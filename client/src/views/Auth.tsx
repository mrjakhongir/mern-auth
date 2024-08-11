import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import WelcomeContent from '../components/WelcomeContent';

function Auth() {
	const [toggleWelcome, setToggleWelcome] = useState(false);
	return (
		<div className='relative w-[450px] h-[700px] md:w-[760px] md:h-[500px] overflow-hidden bg-white shadow-lg rounded-xl'>
			<RegisterForm toggleWelcome={toggleWelcome} />
			<LoginForm toggleWelcome={toggleWelcome} />
			<WelcomeContent
				toggleWelcome={toggleWelcome}
				setToggleWelcome={setToggleWelcome}
			/>
		</div>
	);
}

export default Auth;
