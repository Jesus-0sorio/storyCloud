import React from 'react';
import { Link } from 'react-router-dom';
import {CommonInput} from '../Components'

export const SignUp = () => {
	return (
		<div className='h-screen w-screen'>
			<div className='bg-signup flex justify-center h-full '>
				<div className='bg-white shadow-lg my-auto w-auto xl:w-auto p-10 sm:p-16 border rounded-lg'>
					<form
						action=''
						className='grid justify-center gap-6 h-3/5'>
						<h1 className='font-medium text-4xl text-center mb-4'>
							StoryCloud
						</h1>
            <CommonInput type='text' text='Correo electronico' />
            <CommonInput type='text' text='Nombre completo' />
            <CommonInput type='text' text='Nombre de usuario' />
            <CommonInput type='password' text='Contraseña' />
						<div className='text-sm flex justify-center'>
							<input type='checkbox' />{' '}
							<span className='ml-2'>
								Aceptar{' '}
								<Link className='text-blue-500  underline hover:text-blue-800'>
									Terminos y Condiciones
								</Link>
							</span>
						</div>
						<button
							className='h-12 w-64 md:h-14 md:w-72 bg-[#965100] text-white rounded-md hover:bg-[#7a460b]'>
							Registrarte
						</button>
					</form>
					<p className='text-center mt-5'>
						¿Tienes una cuenta?
						<Link
							className='underline text-blue-500 ml-1 hover:text-blue-800'
							to='/login'>
							Iniciar sesion
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
