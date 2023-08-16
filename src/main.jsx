import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Router from './Router'
import globalColors from './styles/global/globalColors'
import './styles/global/temp.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={globalColors}>
        <Router/>
    </ThemeProvider>
  </React.StrictMode>,
)
