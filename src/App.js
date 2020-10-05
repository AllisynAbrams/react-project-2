import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import PetListings from './components/PetListings';

function App() {
	return (
		<div className='App'>
			<Header />
		</div>
	);
}

export default App;
