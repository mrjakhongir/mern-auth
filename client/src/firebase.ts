import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'mern-auth-f3589.firebaseapp.com',
	projectId: 'mern-auth-f3589',
	storageBucket: 'mern-auth-f3589.appspot.com',
	messagingSenderId: '614934502303',
	appId: '1:614934502303:web:7056d82141334b6b443baa',
};

export const app = initializeApp(firebaseConfig);
