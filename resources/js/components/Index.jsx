import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

export default function Index() {
    return (
        <App/>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<Index/>)
