import { NavLink } from 'react-router-dom';
import imgHome from '../assets/imgHome.svg';

export const Login = () => {
	return (
		<div className='flex h-screen mx-auto px-5 md:px-3 md:pt-3'>
			<div className='hidden md:grid justify-items-center items-end h-full'>
				<h2 className='text-4xl text-center text-[#965100] font-mono'>
					Mas Que Compartir Historias
				</h2>
				<img
					src={imgHome}
					alt=''
				/>
			</div>
			<div className='shadow-lg m-auto w-auto md:w-2/5 lg:w-auto p-11 sm:p-16 border rounded-lg'>
				<form
					action=''
					className='grid justify-center gap-6 h-3/5'>
					<h1 className='font-medium text-3xl text-center mb-4'>StoryCloud</h1>

					<input
						className=' h-12 w-64 md:w-52 lg:h-14 lg:w-72 border rounded-lg p-3'
						type='text'
						placeholder='Correo electronico'
					/>
					<input
						className='h-12 w-64 md:w-52 lg:h-14 lg:w-72 border rounded-lg p-3'
						type='password'
						placeholder='Contraseña'
					/>
					<button className='h-12 w-64 md:w-52 lg:h-14 lg:w-72   bg-[#965100] text-white rounded-md hover:bg-[#7a460b]'>
						Ingresar
					</button>
				</form>
				<p className='text-center mt-5'>
					Si no tienes cuenta
					<NavLink
						className='underline text-blue-500 ml-1 hover:text-blue-700'
						to='/signup'>
						Registrate
					</NavLink>
				</p>
			</div>
		</div>
	);
};
