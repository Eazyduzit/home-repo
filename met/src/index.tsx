import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // Removed strict mode temporarely because it caused it to fetch the data twice..
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
)
