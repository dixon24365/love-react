import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page from './page.jsx'
import Header from './assets/header.jsx'
import MainContent from './assets/mainContent.jsx'
import Footer from './assets/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
   <MainContent/>
   <Footer/>
  </StrictMode>,
)
