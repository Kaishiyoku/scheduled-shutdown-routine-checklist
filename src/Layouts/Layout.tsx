import {Outlet} from 'react-router';
import {StackedLayout} from '../Components/Catalyst/stacked-layout.tsx';
import {Navbar, NavbarItem, NavbarSection,} from '../Components/Catalyst/navbar.tsx';
import {Sidebar, SidebarBody, SidebarItem, SidebarSection,} from '../Components/Catalyst/sidebar.tsx';

export default function Layout() {
	const navItems = [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'Manage tasks',
			url: '/tasks',
		},
	];

	return (
		<StackedLayout
			navbar={
				<Navbar>
					<NavbarSection className="max-lg:hidden">
						{navItems.map(({ label, url }) => (
							<NavbarItem key={label} href={url}>
								{label}
							</NavbarItem>
						))}
					</NavbarSection>
				</Navbar>
			}
			sidebar={
				<Sidebar>
					<SidebarBody>
						<SidebarSection>
							{navItems.map(({ label, url }) => (
								<SidebarItem key={label} to={url}>
									{label}
								</SidebarItem>
							))}
						</SidebarSection>
					</SidebarBody>
				</Sidebar>
			}
		>
			<Outlet />
		</StackedLayout>
	);
}
