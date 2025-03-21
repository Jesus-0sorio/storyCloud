import { useEffect, useState } from 'react';
import { postServices } from '../Services/postServices';

export const usePost = () => {
	const [posts, setPosts] = useState([]);
	const [userPosts, setUserPosts] = useState();
	const [file, setFile] = useState(null);
	const [description, setDescription] = useState('');

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await postServices.getAll();
				setPosts(data.reverse());
			} catch (error) {
				console.error('Error al obtener los posts:', error);
			}
		};

		fetchPosts();
	}, []);

	const getFile = (acceptedFiles) => {
		setFile(acceptedFiles[0]);
	};

	const getDescription = (data) => {
		setDescription(data);
	};

	const getPostById = (id) => {
		postServices.get(id);
	};

	const getAllPost = () => {
		postServices.getAll();
	};

	const getUserPosts = async (id) => {
		try {
			const { data } = await postServices.getAllByUser(id);
			setUserPosts(data.reverse());
		} catch (error) {
			console.error('Error al obtener los posts:', error);
		}
	};

	const addPost = async () => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('description', description);
		await postServices.create(formData);
		window.location.reload();
	};

	const updatePost = async (id, file) => {
		if (file.like == true) {
			await postServices.update(id, file);
		} else {
			await postServices.update(id, {
				like: true,
				...file,
			});
		}
	};

	const deletePost = async (id) => {
		await postServices.delete(id);
		window.location.reload();
	};

	return {
		file,
		posts,
		getFile,
		getDescription,
		getPostById,
		getAllPost,
		addPost,
		updatePost,
		deletePost,
		getUserPosts,
		userPosts,
	};
};
