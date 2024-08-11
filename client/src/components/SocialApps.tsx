const socialMedia = [
	{ id: 1, link: '', img: '/icons/google.svg', label: 'Google' },
	{ id: 2, link: '', img: '/icons/github.svg', label: 'GitHub' },
	{ id: 3, link: '', img: '/icons/linkedin.svg', label: 'LinkedIn' },
];

function SocialApps() {
	return (
		<div className='flex items-center justify-center gap-3'>
			{socialMedia.map((app) => (
				<a
					href={app.link}
					className='w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center cursor-pointer transition-all hover:shadow-lg hover:-translate-y-[2px]'
					key={app.id}>
					<img
						className='w-4 h-4'
						src={app.img}
						alt={app.label}
						width={20}
						height={20}
					/>
				</a>
			))}
		</div>
	);
}

export default SocialApps;
