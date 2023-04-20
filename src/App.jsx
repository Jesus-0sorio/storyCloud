import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Home, Login, SignUp, PageNoFound, Profile, Settings, Messages } from './Pages';
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
								path='/profile/:id'
								element={
									<ProtectedRoute>
										<Profile />
									</ProtectedRoute>
								}
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
								path='/settings'
								element={
									<ProtectedRoute>
										<Settings />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/messages'
								element={
										<Messages />
								}
							/>
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
