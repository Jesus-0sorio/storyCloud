import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Home, Login, SignUp, PageNoFound, Profile, Settings } from './Pages';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './Components/Shared/Navbar';

function App() {
	return (
		<BrowserRouter>
			<AuthContext>
				<div className='grid grid-cols-6'>
					<div className='col-span-1'>
						<Navbar />
					</div>
					<div className='col-span-5'>
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
								path='*'
								element={<PageNoFound />}
							/>
						</Routes>
					</div>
				</div>
			</AuthContext>
		</BrowserRouter>
	);
}

export default App;
