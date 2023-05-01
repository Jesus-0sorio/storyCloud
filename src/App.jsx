import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Home, Login, SignUp, PageNoFound, Profile, Settings, Messages } from './Pages';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './Components/Shared/Navbar';


function App() {
	return (
		<BrowserRouter>
			<AuthContext>
				<Routes>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/signup'
						element={<SignUp />}
					/>
					<Route element={<ProtectedRoute />}>
						<Route
							path='/profile/:id'
							element={<Profile />}
						/>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/settings'
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
			</AuthContext>
		</BrowserRouter>
	);
}

export default App;
