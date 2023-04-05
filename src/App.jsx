import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login } from './Pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
