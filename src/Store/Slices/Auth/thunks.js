import { login, logout } from './AuthSlice'

export const loginThunk = (user, password) => (dispatch) => {
    dispatch(login({ user, password }));
}

export const logoutThunk = () => (dispatch) => {
    dispatch(logout());
}  
