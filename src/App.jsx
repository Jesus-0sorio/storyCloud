import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Home, Login, SignUp, PageNoFound } from './Pages';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './Components/Shared/Navbar';

function App() {
	return (
		<BrowserRouter>
			<AuthContext>
				<Navbar />
				<Routes>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/signup'
						element={<SignUp />}
					/>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path='*'
						element={<PageNoFound/>}
					/>
				</Routes>
			</AuthContext>
		</BrowserRouter>
	);
}

export default App;
