import { useState, useRef } from 'react';
import {
	BiPaperPlane,
	BsSearch,
	GrHomeRounded,
	IoAddCircleOutline,MdOutlineCancel
} from 'react-icons/all';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { RxExit } from 'react-icons/rx';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import logo from '../../assets/camera.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../Store/Slices/Auth/thunks';
import { useUser } from '../../hooks/useUser';

export const Navbar = ({handleModal}) => {

	const { user } = useUser();
	const [active, setActive] = useState('home');
	const navigate = useNavigate();
	const searchRef = useRef();

	const dispatch = useDispatch();


	const activeClass =
		'group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 bg-gray-100 w-full';
	const inactiveClass =
		'group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600';

	const classSelected = (value) => {
		setActive(value);
	};

	const handleLogout = () => {
		setActive('home');
		dispatch(logout());
		navigate('/login');
	};


	return (
		<>
			<div className={` min-h-screen bg-gray-100 fixed z-10`}>
				<div
					className={`min-h-screen border-r overflow-hidden transition-all duration-300 ease-in-out  bg-white shadow-lg ${
						active == 'search' ? 'w-12' : 'w-60'
					}`}>
					<div className='flex h-screen flex-col justify-between pt-2 pb-6'>
						<div>
							<Link
								to='/'
								className='w-max p-1 flex m-auto gap-1 items-center'>
								<img
									src={logo}
									className='w-10'
									alt=''
								/>{' '}
								<span>StoryCloud</span>
							</Link>
							<ul className='mt-6 space-y-2 tracking-wide'>
								<li
									className='min-w-max'
									onClick={() => classSelected('home')}>
									<Link
										to='/'
										aria-label='inicio'
										className={active == 'home' ? activeClass : inactiveClass}>
										<GrHomeRounded />
										<span
											className={`-mr-1 ${
												active == 'home' ? 'font-medium' : ''
											}`}>
											Inicio
										</span>
									</Link>
								</li>
								<li
									className='min-w-max'
									onClick={() => classSelected('search')}>
									<button
										
										className={
											active == 'search' ? activeClass : inactiveClass
										}>
										<BsSearch className='group-hover:text-[#404040]' />
										<span
											className={`-mr-1 ${
												active == 'search' ? 'font-medium' : ''
											}`}>
											Buscar
										</span>
									</button>
								</li>
								{/* <li
									className='min-w-max'
									onClick={() => classSelected('send')}>
									<NavLink
										to='/messages'
										className={active == 'send' ? activeClass : inactiveClass}>
										<BiPaperPlane
											className='group-hover:text-[#404040]'
											size={18}
										/>
										<span
											className={`-mr-1 ${
												active == 'send' ? 'font-medium' : ''
											}`}>
											Mensajes
										</span>
									</NavLink>
								</li> */}
								<li
									className='min-w-max'
									onClick={
										(() => {classSelected('create'); handleModal()})
									}>
									<button
										className={
											active == 'create' ? activeClass : inactiveClass
										}>
										<IoAddCircleOutline className='text-gray-600 group-hover:text-[#404040] text-lg' />
										<span
											className={`-mr-1 ${
												active == 'create' ? 'font-medium' : ''
											}`}>
											Crear
										</span>
									</button>
								</li>
								<li
									className='min-w-max'
									onClick={() => classSelected('profile')}>
									<Link
										to={ `/profile/${user.userID}`}
										className={
											active == 'profile' ? activeClass : inactiveClass
										}>
										<HiOutlineUserCircle
											className='group-hover:text-[#404040]'
											size={18}
										/>
										<span
											className={`-mr-1 ${
												active == 'profile' ? 'font-medium' : ''
											}`}>
											Perfil
										</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className='w-max -mb-3'>
							<button
								onClick={() => handleLogout()}
								className='group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600'>
								<RxExit
									className='group-hover:text-[#404040]'
									size={18}
								/>
								<span className='group-hover:text-gray-700'>Cerrar sesion</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`overflow-auto pl-12 min-h-screen fixed transition-all duration-300 ease-in-out w-0 ${
					active != 'search' ? 'hidden' : 'w-[21rem]'
				}`}>
				<div className=' border-r bg-white'>
					<div className='p-4'>
						<h1 className='text-xl mb-4'>Buscar</h1>
						<div className=''>
							<input
								placeholder='buscar'
								type='text'
								className='text-sm h-10 w-64 border rounded-md p-3'
								ref={searchRef}
							/>
							<button onClick={() => (searchRef.current.value = '')}>
								<MdOutlineCancel className='absolute inset-y-[4.5rem] right-6' />
								{/* <span className='absolute inset-y-[4.22rem] right-5'>✖️</span> */}
							</button>
						</div>
					</div>
					<div className='border-t p-4 min-h-screen bg-white w-full mt-2'>
						<span className='text-sm'>Sin busquedas</span>
					</div>
				</div>
			</div>
			
		</>
	);
};
