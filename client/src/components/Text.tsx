type TextProps = {
	content: string;
	theme: string;
};
function Text({ content, theme }: TextProps) {
	return (
		<p
			className={`text-center text-sm ${
				theme === 'dark' ? 'text-white' : 'text-slate-700'
			}`}>
			{content}
		</p>
	);
}

export default Text;
