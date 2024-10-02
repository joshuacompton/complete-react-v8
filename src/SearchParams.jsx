import { useState } from 'react'
import Select from './Select'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
const BREEDS = []

const SearchParams = () => {
  const [location, setLocation] = useState('Morton IL')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')

  return (
    <div className="search-params">
      <form>
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
          options={BREEDS}
          stateValue={breed}
          stateSet={setBreed}
          selectId="breed"
        />
      </form>
    </div>
  )
}

export default SearchParams
