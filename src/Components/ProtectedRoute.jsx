import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../Components/Shared/Navbar';

export const ProtectedRoute = ({ children }) => {
	const { isAuth } = useSelector((state) => state.user);
	if (!isAuth) return <Navigate to='/login' />;

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
