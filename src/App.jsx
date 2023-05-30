import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Shared/Navbar';
import {
	Home,
	Login,
	Messages,
	PageNoFound,
	Profile,
	Settings,
	SignUp,
} from './Pages';
import { ProtectedRouter } from './Components/ProtectedRouter';
import { Loading } from './Components/Loading';
import { useSelector } from 'react-redux';

function App() {
	const { isLoading } = useSelector((state) => state.loading);

	return (
		<BrowserRouter>
				{isLoading && <Loading />}
				<Routes>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/signup'
						element={<SignUp />}
					/>
					<Route element={<ProtectedRouter />}>
						<Route
							path='/profile/:id'
							element={<Profile />}
						/>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/settings/:id'
							element={<Settings />}
						/>
						<Route
							path='/messages'
							element={<Messages />}
						/>
					</Route>
					<Route
						path='*'
						element={<PageNoFound />}
					/>
				</Routes>
		</BrowserRouter>
	);
}

export default App;
