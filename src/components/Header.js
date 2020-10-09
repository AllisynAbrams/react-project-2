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
			{/* <NavbarBrand className='mr-auto' id='logo'>
				<div>
					<Link to='/'>Furry Friends</Link>
				</div>
			</NavbarBrand> */}

			<Link to='/Favorites'>
				<p className='favorites-nav-link'>MY FAVORITES</p>
			</Link>

			<NavbarToggler onClick={toggleNavbar} className='mr-2' />
			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<NavItem className='nav-link'>
						<Link to='/'>ALL PETS</Link>
					</NavItem>

					<NavItem className='nav-link'>
						<Link to='/Favorites'>MY FAVORITES</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;