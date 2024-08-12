import { Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';

function App() {
	return (
		<div className='bg-slate-100 h-[100vh] grid place-content-center'>
			<Routes>
				<Route path='/auth' element={<Auth />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
