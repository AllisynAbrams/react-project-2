import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import PetListings from './components/PetListings';
import Banner from './components/Banner';


function App() {
	return (
		<div className='App'>
			<nav>
				<Header />
			</nav>

			<main>
				<Route exact path='/'>
					<Banner 
          backgroundImage={'https://i.imgur.com/BI9kwQv.jpg?1/'} />
				</Route>

				<PetListings />
			</main>
		</div>
	);
}

export default App;
