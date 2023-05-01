import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CommonInput } from '../Components';
import { loginThunk } from '../Store/Slices/Auth/thunks';
import loginImg from '../assets/login.svg';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [use, setUse] = useState({
		email: '',
		password: '',
	});
	const Navigate = useNavigate();
	const dispatch = useDispatch();

	const handleEmail = ((e) => {
		console.log(e.target.name)
		setUse({
			...use,
			[e.target.name]: e.target.value,
		});
		//setEmail(e);
	}).bind(this);

	const handlePassword = (e) => {
		setPassword(e);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(loginThunk(email, password));
		Navigate('/');
	};
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
					onSubmit={handleLogin}
					className='grid justify-center gap-6 h-3/5'>
					<h1 className='font-medium text-3xl text-center mb-4'>StoryCloud</h1>
					<CommonInput
						type='email'
						text='Correo electronico'
						name='email'
						isRequired
						handleFunc={handleEmail}
					/>
					<CommonInput
						type='password'
						text='Contraseña'
						name='password'
						isRequired
						handleFunc={handleEmail}
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
