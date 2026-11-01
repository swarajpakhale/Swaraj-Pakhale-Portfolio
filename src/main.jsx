import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallbackMessage="Unable to load portfolio. Please refresh.">
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
