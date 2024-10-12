import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdoptedPetContext from './AdoptedPetContext'
import SearchParams from './SearchParams'
import Details from './Details'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity, cacheTime: Infinity },
  },
})

const App = () => {
  const adoptedPet = useState(null)
  return (
    <div className="p-0 m-0 app-background">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="w-full mb-10 p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 text-center">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                <h1>Adopt Me</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}

const container = document.querySelector('#root')
createRoot(container).render(<App />)
