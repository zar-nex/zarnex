import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css' - CSS handled by CDN in index.html for current build workaround.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
