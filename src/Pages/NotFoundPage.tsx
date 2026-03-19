import { NavLink } from 'react-router';

export default function NotFoundPage() {
	return (
		<div className="prose">
			<h1>404 Seite nicht gefunden</h1>

			<NavLink to="/">Zurück zur Startseite</NavLink>
		</div>
	);
}
