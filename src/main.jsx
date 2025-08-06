import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './ShoopingApp/Product'
import Router from '../Router'
import CartSunmary from './ShoopingApp/CartSummary'
import ShoppingApp from './ShoopingApp/ShoopingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
  </StrictMode>,
)
