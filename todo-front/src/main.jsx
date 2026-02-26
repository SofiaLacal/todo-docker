import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import WebRoutes from './Router/webRoutes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  </StrictMode>,
)
