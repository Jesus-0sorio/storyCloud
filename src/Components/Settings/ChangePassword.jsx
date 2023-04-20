import { useState } from 'react';

export const ChangePassword = () => {
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newPassword !== confirmPassword) {
			setPasswordsMatch(false);
		} else {
			// Aquí se enviaría la solicitud para cambiar la contraseña
			alert('Contraseña cambiada con éxito');
		}
	};

	return (
		<div className='max-w-md mx-auto mt-10 px-4'>
			<h1 className='text-2xl font-medium mb-6'>Cambiar contraseña</h1>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label className='block font-medium mb-2'>Contraseña actual</label>
					<input
						type='password'
						value={currentPassword}
						onChange={(e) => setCurrentPassword(e.target.value)}
						className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500'
					/>
				</div>
				<div className='mb-4'>
					<label className='block font-medium mb-2'>Nueva contraseña</label>
					<input
						type='password'
						value={newPassword}
						onChange={(e) => {
							setNewPassword(e.target.value);
							setPasswordsMatch(e.target.value === confirmPassword);
						}}
						className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
							passwordsMatch ? 'border-gray-300' : 'border-red-500'
						}`}
					/>
				</div>
				<div className='mb-4'>
					<label className='block font-medium mb-2'>Confirmar nueva contraseña</label>
					<input
						type='password'
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
							setPasswordsMatch(e.target.value === newPassword);
						}}
						className={`w-full border rounded-lg px-3 py-2 focus:outline-none ${
							passwordsMatch ? 'border-gray-300' : 'border-red-500'
						}`}
					/>
				</div>
				{!passwordsMatch && (
					<p className='text-red-500 mb-4'>Las contraseñas no coinciden.</p>
				)}
				<button
					type='submit'
					className='bg-blue-500 text-white rounded-lg px-4 py-2 font-medium'>
					Cambiar contraseña
				</button>
			</form>
		</div>
	);
};
