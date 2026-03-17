import './App.css';
import {Route, Routes} from 'react-router';
import HomePage from './Pages/HomePage.tsx';
import Layout from './Layouts/Layout.tsx';
import NotFoundPage from './Pages/NotFoundPage.tsx';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
