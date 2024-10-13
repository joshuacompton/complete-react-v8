import { useState, lazy } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchPet from './fetchPet'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
const Modal = lazy(() => import('./Modal'))

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
    <div className="p-8 bg-pink-100 block mx-auto mb-20 w-3/4 drop-shadow-lg rounded-md">
      <Carousel images={pet.images} />

      <div className="flex flex-col items-center my-8 gap-4">
        <h2 className="text-6xl font-bold ">{pet.name}</h2>
        <h3 className="font-bold">
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h3>
        <button className="primary-button" onClick={() => setShowModal(true)}>
          Adopt {pet.name}
        </button>
        <p className="max-w-2xl">{pet.description}</p>
        {showModal ? (
          <Modal>
            <div className="bg-pink-100 inline-block p-16 rounded-md fixed left-1/3 top-40 z-10">
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button className="primary-button">Yes</button>
                <button
                  className="primary-button"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
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
