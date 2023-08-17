import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Router from './Router'
import globalColors from './styles/global/globalColors'
import './styles/global/temp.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools"

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={globalColors}>
        <QueryClientProvider client={client}>
          <Router/>
          <ReactQueryDevtools />
        </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
