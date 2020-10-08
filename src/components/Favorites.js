import React from 'react';
import '../App.css';
import { Route, Link, Switch } from 'react-router-dom';

const Favorites = (props) => {
    console.log('this is Favorites props:', props)

// const favePets = props.faves[0]
// 	? props.faves.map((animal) => {
// 			return (
// 				<div className='fave-pet-card' key={animal.id}>
// 					<img src={animal.photos[0].small} alt='pets image' />
// 					<p>Name: {animal.name}</p>
// 					<p>Age: {animal.age}</p>
// 					<p>Primary Breed: {animal.breeds.primary}</p>
// 					<p>id: {animal.id}</p>
// 				</div>
// 			);
// 	  })
// 	: 'LOADING....';

	return (
    // {favePets}
    <h1>this is favorites page</h1>
    )
};

export default Favorites;
