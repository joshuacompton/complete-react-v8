import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Everything that happens on client side, not server side goes here.
hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
