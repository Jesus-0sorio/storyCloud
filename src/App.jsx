import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Home, Login, SignUp } from './Pages';
import { AuthContext } from './context/AuthContext';

function App() {
	return (
		<BrowserRouter>
			<AuthContext>
				<Routes>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route 
						path='/signup'
						element={<SignUp />}
					/>
				</Routes>
			</AuthContext>
		</BrowserRouter>
	);
}

export default App;
