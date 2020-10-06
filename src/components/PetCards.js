import React, {useState, useEffect} from 'react';
import '../App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Favorites from './Favorites';
import SinglePetDetails from './SinglePetDetails';

const PetCards = (props) => {
	const [current, setCurrent] = useState("");

	//  handler to show details page of clicked animal
	
	const displayAnimalCards =
		// since not all animals have photos, need to chain filter and map to filter for only animals that have animals.photos[0].small
		props.animals[0]
			? props.animals
					.filter((animal) => {
						return animal.photos.length > 0;
					})
					.map((animal, index) => {
						console.log('this is animal.photos', animal.photos);
						return (
							<div className='pet-card-listing'>
								<Link to={`/SinglePetDetails/${animal.id}`}>
									<div
										className='pet-card'
										key={animal.id}
										id={animal.id}>
										<img src={animal.photos[0].small} alt='pets image' />
										<p>Name: {animal.name}</p>
										<p>Age: {animal.age}</p>
										<p>Primary Breed: {animal.breeds.primary}</p>
										<p>id: {animal.id}</p>
									</div>
								</Link>
								<button className='add-to-favorites-button'>
									Add to Favorites
								</button>
							</div>
						);
					})
			: 'LOADING....';

	console.log('this is displayAnimalCards', displayAnimalCards);
	console.log('this is animals in useState', props.animals);

	return (
		<div>
			<div className='pet-card-container'>{displayAnimalCards}</div>
			
				{/* <Route
					path='/SinglePetDetails'
					render={(routerProps) => (
						<SinglePetDetails {...routerProps} current={current} />
					)}
				/> */}
			
		</div>
	);
};

export default PetCards;
