import { Switch } from '@headlessui/react';
import { useState } from 'react';

export const ProfileEdit = () => {
	const [isPrivate, setIsPrivate] = useState(false);

	return (
		<>
			<div className='max-w-lg mx-auto mt-20 border rounded-lg shadow-lg p-7'>
				<h1 className='text-2xl font-semibold mb-4'>Editar Perfil</h1>
				<div className='grid grid-cols-2 gap-6 mb-4'>
					<div>
						<label
							htmlFor='name'
							className='block font-medium mb-2'>
							Nombre
						</label>
						<input
							type='text'
							id='name'
							className=' border-gray-100 border outline-none rounded-md p-2 w-full'
							placeholder='Your name'
						/>
					</div>
					<div>
						<label
							htmlFor='username'
							className='block font-medium mb-2'>
							Usuario
						</label>
						<input
							type='text'
							id='username'
							className='border-gray-100 border outline-none rounded-md p-2 w-full'
							placeholder='Your username'
						/>
					</div>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='bio'
						className='block font-medium mb-2'>
						Descripción
					</label>
					<textarea
						id='bio'
						className='border-gray-100 border outline-none rounded-md p-2 w-full h-24 resize-none'
						placeholder='Write a short bio about yourself'></textarea>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block font-medium mb-2'>
						Email
					</label>
					<input
						type='email'
						id='email'
						className='border-gray-100 border outline-none rounded-md p-2 w-full'
						placeholder='Your email'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='phone'
						className='block font-medium mb-2'>
						Número de teléfono
					</label>
					<input
						type='tel'
						id='phone'
						className='border-gray-100 border outline-none rounded-md p-2 w-full'
						placeholder='Your phone number'
					/>
				</div>
				<div className='mb-4'>
					<label className='block font-medium mb-2'>Cuenta Privada</label>
					<Switch
						checked={isPrivate}
						onChange={setIsPrivate}
						className={`${
							isPrivate ? 'bg-blue-500' : 'bg-gray-200'
						} relative inline-flex items-center h-6 rounded-full w-11`}>
						<span className='sr-only'>Activar cuenta privada</span>
						<span
							className={`${
								isPrivate ? 'translate-x-6' : 'translate-x-1'
							} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
				</div>
				<button className='bg-blue-500 text-white rounded-md px-4 py-2 font-medium'>
					Save Changes
				</button>
			</div>
		</>
	);
};
