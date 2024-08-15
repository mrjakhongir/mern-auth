import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
	children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
	const { currentUser } = useSelector((state: RootState) => state.user);
	if (currentUser) {
		return <div>{children}</div>;
	} else {
		return <Navigate to='/auth' />;
	}
}

export default PrivateRoute;
