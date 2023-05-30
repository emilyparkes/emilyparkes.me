import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'
import './main.css'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
  <Router>
    <App />
  </Router>
  )
})
