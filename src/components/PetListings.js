import React, {useState, useEffect} from 'react';
import '../App.css';
import { Route } from 'react-router-dom';
import PetCards from './PetCards'
import SinglePetDetails from './SinglePetDetails'
import Favorites from './Favorites'


const PetListings = (props) => {
	const [animals, setAnimals] = useState([]);
	const [faves, setFaves] = useState([]);

	const addToFavorites = (animal) => {
		const favesArray = [...faves];
		const animalIndex = favesArray.indexOf(animal);
		if (animalIndex < 0) {
			favesArray.push(animal);
			console.log(`adding ${animal.name} to favesArray`);
			setFaves(favesArray);
			console.log('this is faves', faves);
		}
	};

	//this artcile helped me better understand removing something from faves https://medium.com/@thanhprofession/creating-a-shopping-list-app-using-react-hooks-bfd231cad813
	const removeFromFavorites = (animal) => {
		const favesArray = [...faves];
		const newFavesArray = favesArray.filter((index) => index !== animal);
		console.log('this isnewFavesArray:', newFavesArray);
		setFaves(newFavesArray);
		// setFaves(faves.slice().filter((index) => index !== animal))
	};

	// 	const favesArray = [...faves];
	// 	const animalIndex = favesArray.indexOf(animal);
	// 	if (animalIndex > -1) {
	// 		favesArray.splice(animalIndex,1)
	// 		console.log(`removing ${animal.name} from favesArray`);
	//         setFaves(favesArray);
	// 		console.log('this is faves', faves);
	// 	}
	// };

	// Used this article as basis to make the API call.
	// https://dojo.domo.com/t5/Domo-Developer/Tutorial-build-your-own-connector-against-petfinder-API/td-p/48593#

	// It requires an initial call to get a Bearer Token which is then used in a second call to retrieve the data
	const getToken = async () => {
		const client_id = 'ibOcZPb7jS41hAMJi3oLQWM9oj6h0alpVMmAwBktJZiLeRhYj6';
		const client_secret = 'lTZW5iz2bA84aDs4fz09e9yArV5qbJNMpIYGycv3';

		// FIRST FETCH CALL
		const res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
			body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'POST',
		});
		const json = await res.json();
		const token = json.access_token;

		// SECOND FETCH CALL
		const petRes = await fetch('https://api.petfinder.com/v2/animals', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const petJson = await petRes.json();
		// THE DATA YOU SEE IN THE CONSOLE
		// console.log('this is petJson from App', petJson)
		//   console.log('this is petJson.animals', petJson.animals)
		//   console.log('this is petJson.animals[0].id', petJson.animals[0].id);
		setAnimals(petJson.animals);
	};

	// useEffect w empty depend array makes it so whatever is inside of it
	// only happens once on mount/load (in this case the function to call the API)
	useEffect(() => {
		getToken();
	}, []);

	return (
		<div>
			<Route exact path='/'>
				<PetCards
					animals={animals}
					faves={faves}
					addToFavorites={addToFavorites}
				/>
			</Route>

			<Route exact path='/SinglePetDetails'>
				<SinglePetDetails />
			</Route>

			<Route
				exact
				path='/SinglePetDetails/:id'
				render={(routerProps) => <SinglePetDetails {...routerProps} />}
			/>


			<Route
				exact
				path='/Favorites'
				render={(routerProps) => (
					<Favorites
						{...routerProps}
						faves={faves}
						removeFromFavorites={removeFromFavorites}
					/>
				)}
			/>
		</div>
	);
};;


export default PetListings
