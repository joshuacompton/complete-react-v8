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
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center"
        onSubmit={formSubmit}
      >
        <label htmlFor="location">
          Location
          <input
            className="search-input"
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
        </label>

        <Select options={ANIMALS} stateSet={setAnimal} selectId="animal" />

        <Select options={breeds} selectId="breed" />

        <button
          className="rounded px-6 py-2 color text-white hover:opacity-70 border-none bg-orange-500"
          type="submit"
        >
          Search
        </button>
      </form>

      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
