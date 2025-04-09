import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page from './page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page/>
  </StrictMode>,
)
