import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Pages/HomePage.tsx';
import Layout from './Layouts/Layout.tsx';
import NotFoundPage from './Pages/NotFoundPage.tsx';
import ManageTasksPage from './Pages/ManageTasksPage.tsx';
import DeleteTaskAlert from './Components/Alerts/DeleteTaskAlert.tsx';

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/tasks" element={<ManageTasksPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>

			<DeleteTaskAlert />
		</>
	);
}

export default App;
