import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProfileBar = () => {
	return (
		<>
			<div className='grid grid-cols-3 place-items-center bg-white border-b border-gray-300 px-7 py-4'>
				<div className='flex-1'>
					<h2 className='text-2xl font-semibold'>nombre prueba</h2>
					<h3 className='text-2xl'>user</h3>
					<p className='mt-1'>Descripción de perfil del usuario.</p>
				</div>
				<div className='flex flex-col items-center'>
					<img
						src='https://via.placeholder.com/150'
						alt='Profile'
						className='w-36 h-36 rounded-full'
					/>
					<NavLink to="/storyCloud/settings" className='bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold mt-2'>
						Editar perfil
					</NavLink>
				</div>
				<div className='flex items-center text-gray-600 text-lg space-x-10'>
					<div className='flex flex-col items-center'>
						<span>
							<strong>12</strong>
						</span>
						<span>publicaciones</span>
					</div>
					<div className='flex flex-col items-center'>
						<span>
							<strong>250</strong>
						</span>
                        <span>seguidores</span>
					</div>
					<div className='flex flex-col items-center'>
						<span>
							<strong>150</strong> 
						</span>
                        <span>seguidos</span>
					</div>
				</div>
			</div>
		</>
	);
};
