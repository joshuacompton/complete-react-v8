import { createRoot } from 'react-dom/client'
import SearchParams from './SearchParams'

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams></SearchParams>
    </div>
  )
}

const container = document.querySelector('#root')
createRoot(container).render(<App />)
