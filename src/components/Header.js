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
	NavLink,
} from 'reactstrap';

const Header = (props) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar color='faded' light>
				<NavbarBrand href='/' className='mr-auto'>
					FURRY FRIENDS
				</NavbarBrand>

				<Link to='/Favorites'>
					<p className='favorites-nav-link'>My Favorites</p>
				</Link>

				<NavbarToggler onClick={toggleNavbar} className='mr-2' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<Link to='/'>All Pets</Link>
								{/* <NavLink>All Pets</NavLink>
							</Link> */}
						</NavItem>

						<NavItem>
							<Link to='/Favorites'>Favorites</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;