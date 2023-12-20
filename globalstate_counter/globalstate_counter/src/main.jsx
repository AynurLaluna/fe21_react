import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CountContext from './CountContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountContext>
    <App />
    </CountContext>

  </React.StrictMode>,
)
