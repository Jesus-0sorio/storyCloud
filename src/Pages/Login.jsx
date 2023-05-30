import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/login.svg';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { CommonInput } from '../Components';
import { useEffect, useState } from 'react';
import { login } from '../Store/Slices/Auth/thunks';

export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isAuthenticating } = useSelector((state) => state.user)

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//const { user, login } = useAuth();
	const handleLogin = async (e) => {
		e.preventDefault();
		if (!email || !password)
			return Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
		//login();
		try{
			await dispatch(login({email, password}));
		}catch(err){
			console.log(err);
		}
	};

	useEffect(() => {
		isAuthenticating && navigate('/');
	}, [isAuthenticating, navigate]);


	return (
		<div className='flex h-screen justify-center md:px-3 md:pt-3 col-span-3'>
			<div className='hidden lg:grid justify-items-center items-end h-full'>
				<h2 className='text-4xl text-center text-[#965100] font-mono'>
					Mas Que Compartiendo Historias
				</h2>
				<img
					src={loginImg}
					alt=''
				/>
			</div>
			<div className='shadow-lg my-auto w-auto md:w-[24rem] xl:w-auto p-10 sm:p-16 border rounded-lg'>
				<form
					action=''
					className='grid justify-center gap-6 h-3/5'>
					<h1 className='font-medium text-3xl text-center mb-4'>StoryCloud</h1>
					<CommonInput
						type='text'
						text='Correo electronico'
						isRequired
						onChange={(e) => setEmail(e.target.value)}
					/>
					<CommonInput
						type='password'
						text='Contraseña'
						isRequired
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						onClick={handleLogin}
						className='h-14 w-72 bg-[#965100] text-white rounded-md hover:bg-[#7a460b]'>
						Ingresar
					</button>
				</form>
				<p className='text-center mt-5'>
					Si no tienes cuenta
					<Link
						className='underline text-blue-500 ml-1 hover:text-blue-700'
						to='/signup'>
						Registrate
					</Link>
				</p>
			</div>
		</div>
	);
};
