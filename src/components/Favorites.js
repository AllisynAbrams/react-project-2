import React from 'react';
import '../App.css';



const Favorites = (props) => {
    console.log('this is Favorites props:', props)

    const favePets = 
        props.faves[0] ? 
          props.faves.map((animal, index) => {
			return (
				<div className='fave-pet-card' key={animal.id}>
					<img
						src={animal.photos[0].small}
						alt='pet image'
						className='fave-pet-pic'
					/>
					<div className='fave-pet-card-info'>
						<p>Name: {animal.name}</p>
						<p>Age: {animal.age}</p>
						<p>Primary Breed: {animal.breeds.primary}</p>
						<p>
							Location: {animal.contact.address.city},{' '}
							{animal.contact.address.state}
						</p>
					</div>
					<button
						className='remove-from-favorites-button'
						onClick={() => props.removeFromFavorites(animal)}>
						Remove from Favorites
					</button>
				</div>
			);
	  })
	: 'No favorites yet!';

    console.log('this is favePets - ', favePets)

    return (
    <div className="fave-pet-cards-bodycontainer">{favePets}</div>
    )
    
};

export default Favorites;
