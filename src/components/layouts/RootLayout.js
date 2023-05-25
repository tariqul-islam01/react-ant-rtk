import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
	return (
		<div id="root-layout">
			<header>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="page-1">Page 1</NavLink>
					<NavLink to="page-2">Page 2</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
