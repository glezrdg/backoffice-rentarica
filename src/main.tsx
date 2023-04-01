import React from 'react'
import ReactDOM from 'react-dom/client'

// Redux
import { Provider } from 'react-redux'
import { store } from './redux/store'

// Component
import App from './App'

// Css
import './index.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
