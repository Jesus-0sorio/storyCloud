import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './Components/ProtectedRoute';
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
import { AuthContext } from './context/AuthContext';

function App() {
	return (
		<BrowserRouter>
			<AuthContext>
				<Navbar />
				<Routes>
					<Route
						path='/storyCloud/login'
						element={<Login />}
					/>
					<Route
						path='/storyCloud/signup'
						element={<SignUp />}
					/>
					<Route
						path='/storyCloud/profile/:id'
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/storyCloud'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/storyCloud/settings'
						element={
							<ProtectedRoute>
								<Settings />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/storyCloud/messages'
						element={<Messages />}
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
