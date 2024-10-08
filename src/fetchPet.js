const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1]
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)

  if (!apiRes.ok) {
    // React query expects error to be thrown if fetch fails.
    throw new Error(`details/${id} fetch not ok`)
  }

  return await apiRes.json()
}

export default fetchPet
