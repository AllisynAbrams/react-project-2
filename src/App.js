import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import PetListings from './components/PetListings';
import SinglePetDetails from './components/SinglePetDetails';
import Favorites from './components/Favorites'

function App() {
	return (
		<div className='App'>
			<nav>
				<Header />
			</nav>

			<main>
				<Switch>
					<Route exact path='/Favorites'>
						<Favorites />
					</Route>

					<Route exact path='/'>
						<PetListings />
					</Route>

					<Route exact path='/SinglePetDetails'>
						<PetListings />
					</Route>

					<Route exact path='/SinglePetDetails/:id'>
						<PetListings />
					</Route>

					{/* <Route
						path='/SinglePetDetails/:id'
						render={(routerProps) => (
							<SinglePetDetails {...routerProps} />
						)}
					/> */}
				</Switch>
			</main>
		</div>
	);
}

export default App;
