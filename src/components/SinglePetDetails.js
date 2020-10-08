import React, {useState, useEffect} from 'react';
import '../App.css';

const SinglePetDetails = (props) => {
    const [current, setCurrent] = useState({})


// Used this article as basis to make the API call.  
// https://dojo.domo.com/t5/Domo-Developer/Tutorial-build-your-own-connector-against-petfinder-API/td-p/48593#

// It requires an initial call to get a Bearer Token which is then used in a second call to retrieve the data
// let id = props.current.id

const getToken = async (id) => {
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
  const petRes = await  fetch(`https://api.petfinder.com/v2/animals/${props.match.params.id}`, 
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
    })
  const petJson = await petRes.json()
  // THE DATA YOU SEE IN THE CONSOLE
  // console.log('this is petJson from App', petJson)
  // console.log('this is petJson.animals[0]', petJson.animals[0].type)
  console.log('this is single pet details petJson', petJson)
  console.log('this is single pet details color', petJson.animal.colors.primary);
  setCurrent(petJson.animal)
}


useEffect (() => {
  getToken();
 },);


	return current.photos ? (
		<div>
			<h1>Hi, my name is {current.name}!</h1>
			<img src={current.photos[0].medium} alt='pet' />
			<div className='animal-stats'>
				<p>Pet ID: {current.id}</p>
				<p>
					Location: {current.contact.address.city},{' '}
					{current.contact.address.state}
				</p>
				<p>Name: {current.name}</p>
				<p>Age: {current.age}</p>
				<p>Primary Breed: {current.breeds.primary}</p>
				<p>Gender: {current.gender}</p>
				<p>Size: {current.size}</p>
				<p>Primary Color: {current.colors.primary}</p>
			</div>
			<a href={`mailto:${current.contact.email}`}>
				Email us about this pet
			</a>
			<p>More About {current.name}:</p>
			<p>{current.description}</p>
		</div>
	) : null;
};

export default SinglePetDetails;
