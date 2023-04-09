import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Home, Login, SignUp } from './Pages';
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
				</Routes>
			</AuthContext>
		</BrowserRouter>
	);
}

export default App;
