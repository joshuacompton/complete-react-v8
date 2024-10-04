import { createRoot } from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchParams from './SearchParams'
import Details from './Details'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Adopt Me</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  )
}

const container = document.querySelector('#root')
createRoot(container).render(<App />)
