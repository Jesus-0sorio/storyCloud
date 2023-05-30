import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userServices } from '../Services/userServices';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

export const useEditProfile = () => {
	const {
		user: { userID },
	} = useSelector((state) => state.user);
	const [edit, setEdit] = useState(false);
	const [img, setImg] = useState(null);
	const [{ name, email, username, file }, setUser] = useState({});

	const handleEdit = () => {
		setEdit(!edit);
		setImg(null);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

        let user = {};

        if(e.target.elements.email.value) user.email = e.target.elements.email.value;
        if(e.target.elements.username.value) user.username = e.target.elements.username.value;
        if(e.target.elements.name.value) user.name = e.target.elements.name.value;
        if(img) user.file = img;
	
		await userServices.update(userID, user);

        e.target.elements.email.value = '';
        e.target.elements.username.value = '';
        e.target.elements.name.value = '';


		Swal.fire("Actualizado!", "Tu perfil ha sido actualizado", "success");
	};

	const handleGetFile = (file) => {
		setImg(file[0]);
	};

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await userServices.get(userID);
				setUser({
					name: data.name,
					email: data.email,
					username: data.username,
					file: data.fileUrl,
				});
			} catch (error) {
				console.error('Error al obtener el usuario:', error);
			}
		};

		fetchUser();
	}, []);

	return {
		edit,
		img,
		name,
		email,
		username,
		file,
		handleEdit,
		handleSubmit,
		handleGetFile,
	};
};
