import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchPet from './fetchPet'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import Modal from './Modal'

const Details = () => {
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()

  const results = useQuery(['details', id], fetchPet)

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading</h2>
      </div>
    )
  }

  const pet = results.data.pets[0]

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h2>{pet.name}</h2>
        <h3>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h3>
      </div>
    </div>
  )
}

function DetailsErrorBoundary(props) {
  return (
    // This could just wrap <App>.
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}

export default DetailsErrorBoundary
