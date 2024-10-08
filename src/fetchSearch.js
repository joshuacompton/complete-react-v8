const fetchSearch = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1]
  const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`${animal}, ${location}, ${breed} search failed`)
  }

  return await response.json()
}

export default fetchSearch
