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
			<NavbarBrand href='/' className='mr-auto'>
				furry friends
			</NavbarBrand>


			<Link to='/Favorites'>
				<p className='favorites-nav-link'>MY FAVORITES</p>
			</Link>

			<Link to='/'>
				<p className='favorites-nav-link-allpets'>ALL PETS</p>
			</Link>

			<NavbarToggler onClick={toggleNavbar} className='mr-2' />
			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<NavItem className='nav-link' onClick={toggleNavbar}>
						<Link to='/'>ALL PETS</Link>
					</NavItem>

					<NavItem className='nav-link' onClick={toggleNavbar}>
						<Link to='/Favorites'>MY FAVORITES</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;