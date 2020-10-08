import React from 'react';
import '../App.css';
import { Route, Link, Switch } from 'react-router-dom';

const Favorites = (props) => {
    console.log('this is Favorites props:', props)

    const favePets = 
        props.faves[0] ? 
          props.faves.map((animal, index) => {
			return (
				<div className='fave-pet-card' key={animal.id}>
					<div className='fave-pet-card-info'>
						<img src={animal.photos[0].small} alt='pets image' />
						<p>Name: {animal.name}</p>
						<p>Age: {animal.age}</p>
						<p>Primary Breed: {animal.breeds.primary}</p>

						<button onClick={() => props.removeFromFavorites(animal)}>
							Remove from Favorites
						</button>
					</div>
				</div>
			);
	  })
	: 'No favorites yet!';

    console.log('this is favePets - ', favePets)

    return (
    <div className="fave-pet-card-container">{favePets}</div>
    )
    
};

export default Favorites;
