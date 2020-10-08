import React from 'react';
import './App.css';
import Header from './components/Header';
import PetListings from './components/PetListings';


function App() {
	return (
		<div className='App'>
			<nav>
				<Header />
			</nav>

			<main>

        <PetListings />
				
			</main>
		</div>
	);
}

export default App;
