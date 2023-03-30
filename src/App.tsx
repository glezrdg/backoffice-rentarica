import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

// Components
import Spin from './components/shared/Spin'

//Router
import Router from './routes/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className='spin'>
            <Spin />
          </div>
        }
      >
        <Router />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
