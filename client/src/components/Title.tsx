type TitleProps = {
	content: string;
	theme: string;
};

function Title({ content, theme }: TitleProps) {
	return (
		<h1
			className={`text-3xl text-center font-bold ${
				theme === 'dark' ? 'text-white' : 'text-[#141e30]'
			}`}>
			{content}
		</h1>
	);
}

export default Title;
