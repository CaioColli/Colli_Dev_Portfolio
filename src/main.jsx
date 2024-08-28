import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { AllRoutes } from './Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllRoutes />
  </StrictMode>
)
