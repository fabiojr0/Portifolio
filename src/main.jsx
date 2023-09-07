import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContextProvider from './hooks/useTheme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
)