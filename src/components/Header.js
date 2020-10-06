import React, {useState} from 'react';
import '../App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Favorites from './Favorites'
import PetListings from './PetListings'
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
							<Link to='/'>
								<NavLink>All Pets</NavLink>
							</Link>
						</NavItem>

						<NavItem>
							<Link to='/Favorites'>
								<NavLink>My Favorites</NavLink>
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			
		</div>
	);
};

export default Header;