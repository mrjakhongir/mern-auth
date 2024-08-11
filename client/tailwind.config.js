/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				show: 'show 500ms',
			},
			keyframes: {
				show: {
					'0%, 50%': { opacity: 0, zIndex: 10 },
					'51%, 100%': { opacity: 1, zIndex: 50 },
				},
			},
		},
	},
	plugins: [],
};
