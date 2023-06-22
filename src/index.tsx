import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/34670a76-6022-4df5-ac1d-68f88589c904">
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
