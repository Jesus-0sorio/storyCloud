import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from './Shared/Navbar';
import { Modal } from './publication/Modal';

export const ProtectedRouter = () => {
	const { isAuthenticating } =
		useSelector((state) => state.user) || window.localStorage.getItem('user');

	const [modalState, setModalState] = useState(false);

	const handleModal = () => {
		setModalState(!modalState);
	};

	useEffect(() => {
		if (!isAuthenticating) {
			<Navigate
				to='/login'
				replace={true}
			/>;
		}

		<Navigate
			to='/'
			replace={true}
		/>;
	}, [isAuthenticating]);

	return isAuthenticating ? (
		<>
			<Navbar handleModal={handleModal} />
			<Outlet />
			<Modal
				modalState={modalState}
				handleModal={handleModal}
			/>
		</>
	) : (
		<Navigate
			to='/login'
			replace={true}
		/>
	);
};
