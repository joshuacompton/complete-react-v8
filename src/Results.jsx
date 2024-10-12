import Pet from './Pet'

const results = ({ pets }) => {
  if (!pets.length) {
    return (
      <div className="search">
        <h1>No Pets Found</h1>
      </div>
    )
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {pets.map(pet => (
        <Pet
          id={pet.id}
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
        />
      ))}
    </div>
  )
}

export default results
