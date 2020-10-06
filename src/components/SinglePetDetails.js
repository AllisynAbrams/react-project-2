import React, {useState, useEffect} from 'react';
import '../App.css';
import { Route, Link, Switch } from 'react-router-dom';

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
  console.log('this is single pet details petJson.animals', petJson)
  setCurrent(petJson.animal)
}


useEffect (() => {
  getToken();
 },[]);


	return (
    <h1>hi</h1>
    )
};

export default SinglePetDetails;
