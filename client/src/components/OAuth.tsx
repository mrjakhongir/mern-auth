import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/userSlice';
import { app } from '../firebase';

function OAuth() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	async function handleSubmit() {
		try {
			const provider = new GoogleAuthProvider();
			const auth = getAuth(app);
			const result = await signInWithPopup(auth, provider);
			const response = await fetch('/api/auth/google', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: result.user.displayName,
					email: result.user.email,
					photo: result.user.photoURL,
				}),
			});
			const data = await response.json();
			dispatch(signInSuccess(data));
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<button
			type='button'
			className='bg-slate-300 text-slate-800 py-1 px-2 rounded-lg cursor-pointer transition-all hover:bg-slate-200'
			onClick={handleSubmit}>
			Continue with google
		</button>
	);
}

export default OAuth;
