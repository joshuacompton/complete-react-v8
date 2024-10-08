import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchSearch from './fetchSearch'
import Select from './Select'
import Results from './Results'
import useBreedList from './useBreedList'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [animal, setAnimal] = useState('')
  const [requestParams, setRequestParams] = useState({
    animal: '',
    breed: '',
    location: '',
  })

  const [breeds] = useBreedList(animal)
  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []

  let formSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const obj = {
      animal: formData.get('animal') ?? '',
      breed: formData.get('breed') ?? '',
      location: formData.get('location') ?? '',
    }

    setRequestParams(obj)
  }

  return (
    <div className="search-params">
      <form onSubmit={formSubmit}>
        <label htmlFor="location">
          Location
          <input name="location" id="location" placeholder="Location" />
        </label>

        <Select options={ANIMALS} stateSet={setAnimal} selectId="animal" />

        <Select options={breeds} selectId="breed" />

        <button type="submit">Search</button>
      </form>

      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
