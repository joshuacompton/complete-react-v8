import { useState, useEffect } from 'react'
import Select from './Select'
import Results from './Results'
import useBreedList from './useBreedList'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [location, setLocation] = useState('Morton IL')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await res.json()
    console.log(json)
    setPets(json.pets)
  }

  useEffect(() => {
    requestPets()
  }, [])

  let formSubmit = e => {
    e.preventDefault()
    requestPets()
  }

  return (
    <div className="search-params">
      <form onSubmit={formSubmit}>
        <label htmlFor="location">
          Location
          <input
            onChange={e => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>

        <Select
          options={ANIMALS}
          stateValue={animal}
          stateSet={setAnimal}
          selectId="animal"
        />

        <Select
          options={breeds}
          stateValue={breed}
          stateSet={setBreed}
          selectId="breed"
        />

        <button type="submit">Search</button>
      </form>

      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
