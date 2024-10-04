import { useState, useEffect } from 'react'

const localCache = {}

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    let requestBreedList = async () => {
      setBreedList([])
      setStatus('loading')

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      )

      const json = await res.json()
      localCache[animal] = json.breeds || []
      setBreedList(localCache[animal])
      setStatus('loaded')
    }

    if (animal) {
      if (localCache[animal]) {
        setBreedList(localCache[animal])
      } else {
        requestBreedList()
      }
    } else {
      setBreedList([])
    }
  }, [animal])

  return [breedList, status]
}
