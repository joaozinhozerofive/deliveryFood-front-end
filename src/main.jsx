import { AuthProvider } from './hooks/auth.jsx'
import { CartProvider } from './hooks/cart.jsx'
import { Routes } from './Routes/index.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "../src/Styles/globalStyle.js"
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
<ThemeProvider theme={theme}>
  <GlobalStyle/>
  <AuthProvider>
  <CartProvider>
    <Routes />
  </CartProvider>
  </AuthProvider>
  </ThemeProvider>
  </React.StrictMode>,
)
