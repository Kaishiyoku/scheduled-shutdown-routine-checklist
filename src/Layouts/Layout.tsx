import {Outlet} from 'react-router';

export default function Layout() {
	return (
		<div className="max-w-2xl mx-auto">
			<main className="px-4 py-12">
				<Outlet />
			</main>
		</div>
	);
}
