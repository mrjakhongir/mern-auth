import { Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<div className='bg-slate-100 h-[100vh] grid place-content-center'>
			<Routes>
				<Route path='/auth' element={<Auth />} />
				<Route path='/' element={<PrivateRoute children={<Home />} />} />
			</Routes>
		</div>
	);
}

export default App;
