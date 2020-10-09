import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';

const Header = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<Navbar color='faded' light>
			<NavbarBrand className='mr-auto' id='logo'>
				<Link to='/'>Furry Friends</Link>
			</NavbarBrand>

			<Link to='/Favorites'>
				<p className='favorites-nav-link'>My Favorites</p>
			</Link>

			<NavbarToggler onClick={toggleNavbar} className='mr-2' />
			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<NavItem class='nav-link'>
						<Link to='/'>All Pets</Link>
					</NavItem>

					<NavItem class='nav-link'>
						<Link to='/Favorites'>Favorites</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;