# Project Overview

## Project Links

- [github repo](https://github.com/AllisynAbrams/react-project-2)
- [live project](https://petappunit2reactproject.netlify.app/)

## Project Description

For this project, I plan to make a pet listings app. I will use React's Link and Route to provide access to the list of all pets, each pet's individual details, and the user's favorited pets. The pet images and details will be populated using fetch to make an API call. 

On page load/mount, a request will be made to the PetFinder API and the image and details of each pet in the PetListings component will show on the screen, along with an "add to favorites" button (each pet and associated info will show in a "card"). When a user clicks on a pet card, it will route to the SinglePetDetails component and render more details for that pet, along with a mailto button to email about that specific pet. 


## API

https://api.petfinder.com/v2/animals

TEST to get data from API - successfully rrendered the URL to each individual animal page in App.js

```
export default function App() {
  
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
(animals[0]) ? animals.map((animal, index) => {
  console.log('this is animals.url', animals[index].url)
  return <p>{animal.url}</p>
})  : 'LOADING....'

console.log('this is displayAnimals', displayAnimals)
console.log('this is animals in useState', animals)


return (
  <>
    {displayAnimals}
  </>
  )
};
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

wireframes:
- [mobile pet listings (home/main)](https://res.cloudinary.com/dv7inaqe9/image/upload/v1601906278/mobile_-_pet_listings_home_vlkhxs.jpg)
- [mobile sinlge pet details page](https://res.cloudinary.com/dv7inaqe9/image/upload/v1601908077/mobile_singlepetdetails_cwb0ar.jpg)

architecture:



### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Functional pet listings app
	- All pet images/info wil be populated by an API call and each will be formated in some type of card format
	- Under each pet card there will be a button the user can click to add the above pet to his/her favorites
	- User can click a pet card and be directed to a page with further details about that pet, as well as a contact method to reach out about that pet
	
- Navbar with options that link to their corresponding pages (home (aka all pet listings), favorites)

- Favorites page that displays the pet cards of the pets "favorited" by the user 
	- under each pet card there will be a button that allows the user to remove that pet from their favorites


#### PostMVP EXAMPLE

- Filter bar on the pet listings page that allows the user to see only dogs, only cats, or only pets of other species
- in the pet listings page, have an up arrow that always stays at the bottom of the view and can be clicked by the user to go back to the top of the page

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  


Time frames are also key in the development cycle. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. 

Unless otherwise noted, time is listed in hours:

|  Component  |  Priority  |  Estimated Time  |  Actual Time  |
|  ---  |  :---:  |   :---:  |  :---:  |
| Create React app and files for all components | high | 1 | 1.5 |
| header/navbar (reactstrap or bootstrap - need to look into this?) | high | 2 | 1.5 |
| banner | low | 0.5 | 1.5 |
| set up React routing | high | 2 | 3 |
| make API call and practice displaying data | high | 1.5 | 2 |
| display and format/style pet listings | high | 3 | 3 |
| make the add to favorites button add animal to the favorites component on click | high | 3 | 3 |
| display pet card in favorites | high | 3 | 3 |
| make remove from favorites button remove from favorites  component on click | high | 2 | 0.75 |
| display/format single pet listing page | high | 3 | 3.5 |
| media queries for tablet responsive  | high | 1 | 1 |
| media queries for desktop responsive  | high | 1 | 0.5 |
| figure out how to deploy on netlify | high | 2 | 1.5 |
| testing and de-bugging | high | 2 | 3 |
| choose fonts and color scheme | med | 2 | 1.5 |
| github upload and commits/branching | high | 0 | 1 |
| contact section - adding and styling contact form | med | 1 | 0 |
|  Total  | H | 30 | 31.25 |

## Additional Libraries
ReactStrap - responsive navbar
GoogleFonts


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.


The below code is how an animal is added to favorites using state, passing props, setting state, and lifting state. The code also ensure an animal is only added to favorites once (i.e. if it's already in favorites and button is clicked again, animal will not be duplicated).

```
useState set and function created in PetListings component and passed as props:
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

     <Route exact path='/'>
				<PetCards animals={animals} faves={faves} addToFavorites={addToFavorites}/>
			</Route>

      <Route exact path='/Favorites' render={(routerProps) => (
					<Favorites {...routerProps} faves={faves} 
          removeFromFavorites={removeFromFavorites}/>


onClick in PetCards component:
<button
	className='add-to-favorites-button'
	onClick={() => props.addToFavorites(animal)}>
	Add to Favorites
	</button>

returning using props in Favorites component:
  const favePets = 
        props.faves[0] ? 
          props.faves.map((animal, index) => {
			return (....
  
  return (
    <div className="fave-pet-cards-bodycontainer">{favePets}</div>
    )
```


The below code is how the pet cards are populated. All animals in my API have a photos array, but many do not actually have any photos/the array is empty. It's important to me that all displayed animals have a photo for visual purposes. For the purpose of this project I decided to only display animals that have photos from the API. To do so, I chained together a filter method and map method. The filter returns only animals whose photos array length is greater than 0 to ensure only animals with at least one photo are then mapped over and returned.

```
const displayAnimalCards = 
props.animals[0] ? 
        props.animals
				.filter((animal) => {
					return animal.photos.length > 0;
				})
				.map((animal, index) => {
					return (
						<div className='pet-card' key={animal.id}>
							<Link to={`/SinglePetDetails/${animal.id}`}>
								<img src={animal.photos[0].medium} alt='pets image' className='pet-pic'	/>
                ...other elements using props and JSX
                );
				})
		: 'LOADING....';
```

```
    return (
		<div>
			<div className='pet-cards-bodycontainer'>{displayAnimalCards}</div>
		</div>
	);
};
```
