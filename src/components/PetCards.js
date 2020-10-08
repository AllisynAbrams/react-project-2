import React from 'react';
import '../App.css';
import { Link} from 'react-router-dom';


const PetCards = (props) => {
		
	
	const displayAnimalCards =
		// since not all animals have photos, need to chain filter and map to filter for only animals that have animals.photos[0].small
		props.animals[0]
			? props.animals
					.filter((animal) => {
						return animal.photos.length > 0;
					})
					.map((animal, index) => {
						// console.log('this is animal.photos', animal.photos);
						return (
							<div className='pet-card' key={animal.id}>
								<Link to={`/SinglePetDetails/${animal.id}`}>
									<div className='pet-card-info'>
										<img src={animal.photos[0].small} alt='pets image' />
										<p>Name: {animal.name}</p>
										<p>Age: {animal.age}</p>
										<p>Primary Breed: {animal.breeds.primary}</p>
										<p>
											Location: {animal.contact.address.city},{' '}
											{animal.contact.address.state}
										</p>
									</div>
								</Link>

								<button
									className='add-to-favorites-button'
									onClick={() => props.addToFavorites(animal)}>
									Add to Favorites
								</button>
							</div>
						);
					})
			: 'LOADING....';

	// console.log('this is displayAnimalCards', displayAnimalCards);
	console.log('this is animals in useState', props.animals);

	return (
		<div>
			<div className='pet-card-container'>{displayAnimalCards}</div>
			
		</div>
	);
};

export default PetCards;
