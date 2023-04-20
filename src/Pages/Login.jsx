import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/login.svg';
import { useAuth } from '../context/AuthContext';
import { CommonInput } from '../Components';

export const Login = () => {
	const Navigate = useNavigate();
	const { user, login } = useAuth();
	const handleLogin = (e) => {
		login();
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
					action=''
					className='grid justify-center gap-6 h-3/5'>
					<h1 className='font-medium text-3xl text-center mb-4'>StoryCloud</h1>
					<CommonInput
						type='text'
						text='Correo electronico'
						isRequired
					/>
					<CommonInput
						type='password'
						text='Contraseña'
						isRequired
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
						to='/storyCloud/signup'>
						Registrate
					</Link>
				</p>
			</div>
		</div>
	);
};
