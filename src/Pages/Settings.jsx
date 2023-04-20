import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProfileEdit } from '../Components/Settings/ProfileEdit'
import { ChangePassword } from '../Components/Settings/ChangePassword';  

import 'tailwindcss/tailwind.css';

export const Settings = () => {
	const [active, setActive] = useState('Editar Perfil');

	const activeClass =
		'inline-block p-4 text-black border-b-2 border-black rounded-t-lg bg-gray-100 select-none';
	const inactiveClass =
		'inline-block p-4 border-b-2 text-gray-500  rounded-t-lg hover:text-gray-600 border-gray-200 hover:border-gray-500 select-none';

	const classSelected = (value) => {
		setActive(value);
	};

	return (
		<Tabs>
			<TabList className={`flex gap-x-3 min-w-full justify-center`}>
				<Tab
					onClick={() => classSelected('Editar Perfil')}
					className={active == 'Editar Perfil' ? activeClass : inactiveClass}>
					Editar Perfil
				</Tab>
				<Tab
					onClick={() => classSelected('Cambiar contraseña')}
					className={
						active == 'Cambiar contraseña' ? activeClass : inactiveClass
					}>
					Cambiar Contraseña
				</Tab>
			</TabList>

			<TabPanel>
				<ProfileEdit />
			</TabPanel>
			<TabPanel>
				<ChangePassword />
			</TabPanel>
		</Tabs>
	);
};
