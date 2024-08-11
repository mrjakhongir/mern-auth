import { Dispatch, SetStateAction } from 'react';
import Text from './Text';
import Title from './Title';

type WelcomeContentProps = {
	toggleWelcome: boolean;
	setToggleWelcome: Dispatch<SetStateAction<boolean>>;
};

function WelcomeContent({
	toggleWelcome,
	setToggleWelcome,
}: WelcomeContentProps) {
	return (
		<div
			className={`absolute w-full z-50 top-2/3 md:top-0 md:left-[60%] md:w-[40%] h-full overflow-hidden transition-all duration-500 ${
				toggleWelcome && 'md:-translate-x-[150%]'
			}`}>
			<div
				className={`relative bg-[#141E30] text-white md:-left-[150%] h-full w-full md:w-[250%] transition-all ${
					toggleWelcome && 'md:translate-x-1/2'
				}`}>
				<div
					className={`absolute flex flex-col gap-6 items-center justify-center md:px-10 text-center md:h-full md:w-[340px] transition-all duration-300 top-8 md:top-0 right-[120%] md:right-[60%] ${
						toggleWelcome
							? 'right-[7%] md:translate-x-[25%]'
							: 'translate-x-[12%]'
					}`}>
					<Title content='Welcome back!' theme='dark' />
					<Text
						theme='dark'
						content='To keep connected with us please login with your personal info'
					/>
					<button
						className='uppercase text-white text-sm font-semibold bg-[#141e30] self-center rounded-full py-2 px-8 transition-all border hover:bg-white hover:text-[#131e30]'
						onClick={() => setToggleWelcome((prevState) => !prevState)}>
						Sign In
					</button>
				</div>
				<div
					className={`absolute flex flex-col gap-6 items-center justify-center md:px-10 text-center md:h-full md:w-[340px] transition-all duration-300 top-8 md:top-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 ${
						toggleWelcome
							? '!right-[120%] !md:right-0 md:translate-x-1/4'
							: 'translate-x-0'
					}`}>
					<Title content='Hello, Friend!' theme='dark' />
					<Text
						theme='dark'
						content='Enter your personal details and start journey with us'
					/>
					<button
						className='uppercase text-white text-sm font-semibold bg-[#141e30] self-center rounded-full py-2 px-8 transition-all border hover:bg-white hover:text-[#131e30]'
						onClick={() => setToggleWelcome((prevState) => !prevState)}>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
}

export default WelcomeContent;
