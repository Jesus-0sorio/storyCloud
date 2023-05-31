import { apiFile, api } from '../config/axios';

const BASE_URL = 'users';

export const userServices = {
	get: async (id) => {
		return await api.get(`/${BASE_URL}/${id}`);
	},

	getAll: async () => {
		return await api.get(`/${BASE_URL}`);
	},

  update: async (id, data) => {
		return await apiFile.patch(`/${BASE_URL}/${id}`, data);
	},
};
