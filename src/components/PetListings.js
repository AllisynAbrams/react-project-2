import React, {useState, useEffect} from 'react';
import '../App.css';
import { Route, Link, Switch } from 'react-router-dom';
import PetCards from './PetCards'
import SinglePetDetails from './SinglePetDetails'
import Favorites from './Favorites'

const PetListings = (props) => {

      const [animals, setAnimals] = useState([])

// Used this article as basis to make the API call.  
// https://dojo.domo.com/t5/Domo-Developer/Tutorial-build-your-own-connector-against-petfinder-API/td-p/48593#

// It requires an initial call to get a Bearer Token which is then used in a second call to retrieve the data
const getToken = async () => {
  const client_id = 'ibOcZPb7jS41hAMJi3oLQWM9oj6h0alpVMmAwBktJZiLeRhYj6'
  const client_secret = 'lTZW5iz2bA84aDs4fz09e9yArV5qbJNMpIYGycv3'


  // FIRST FETCH CALL
  const res = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
  const json = await res.json()
  const token = json.access_token
  

  // SECOND FETCH CALL
  const petRes = await  fetch("https://api.petfinder.com/v2/animals", 
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
    })
  const petJson = await petRes.json()
  // THE DATA YOU SEE IN THE CONSOLE
  // console.log('this is petJson from App', petJson)
  // console.log('this is petJson.animals[0]', petJson.animals[0].type)
  console.log('this is petJson.animals', petJson.animals)
  setAnimals(petJson.animals)


}

// useEffect w empty depend array makes it so whatever is inside of it 
// only happens once on mount/load (in this case the function to call the API)
useEffect (() => {
  getToken();
 },[]);

//  ternary conditional to say, if the animals aray (at least first item) is defined/TRUE (AKA available from 
// the api call now), then map over the animals array and return the url of each item/index,
// otherwise display 'loading..'

const displayAnimals = 
// since not all animals have photos, need to chain filter and map to filter for only animals that have animals.photos[0].small
(animals[0]) ? 
animals.filter((animal) => {
    return animal.photos.length > 0;
})
.map((animal, index) => {
  console.log('this is animals.photos', animal.photos)
  return (
		<div className="pet-card-listing">
			<div className='pet-card'>
				<img
					src={animal.photos[0].small}
					alt='pets image'
				/>
				<p>Name: {animal.name}</p>
				<p>Age: {animal.age}</p>
				<p>Primary Breed: {animal.breeds.primary}</p>
			</div>
            <button className="add-to-favorites-button">Add to Favorites</button>
		</div>
	);
    }) : 'LOADING....'

console.log('this is displayAnimals', displayAnimals)
console.log('this is animals in useState', animals)


return (
  <div className="pet-card-container">
    {displayAnimals}
  </div>
  )
};


export default PetListings
