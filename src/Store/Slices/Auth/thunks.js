import Swal from 'sweetalert2';
import { api } from '../../../config/axios';

import { loginFailed, loginSuccess, logoutStore } from './authSlice';
import { startLoading, stopLoading } from '../loadingSlice';


export const login =
	({ email, password }) =>
	async (dispatch) => {
		dispatch(startLoading());
		const formData = new FormData();
		formData.append('email', email);
		formData.append('password', password);
		try {
			const { data } = await api.post('/auth/login', formData);
			window.localStorage.setItem('token', data.access_token);
			window.localStorage.setItem('user', JSON.stringify(data.user));
			dispatch(loginSuccess(data));
			window.location.reload();
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.response.data.message,
			});
			dispatch(loginFailed(error.message));
		} finally {
			dispatch(stopLoading());
		}
	};

export const logout = () => async (dispatch) => {
	dispatch(startLoading());
	try {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('user');
		dispatch(logoutStore());
	} catch (error) {
		dispatch(loginFailed(error.response?.data.message));
	} finally {
		dispatch(stopLoading());
	}
};

export const register =
	({ email, password, name, username }) =>
	async (dispatch) => {
		dispatch(startLoading());

		const formData = new FormData();
		formData.append('email', email);
		formData.append('password', password);
		formData.append('name', name);
		formData.append('username', username);
		try {
			await api.post('/auth/register', formData);
		} catch (error) {
			dispatch(loginFailed(error.message));

			return error.response.data.message
		} finally {
			dispatch(stopLoading());
		}
	};
