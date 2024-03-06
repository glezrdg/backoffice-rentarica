import { Suspense, useState, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toast, ToastProps } from 'primereact/toast'
import './App.css'

// Components
import Spin from './components/shared/Spin'

//Router
import Router from './routes/Router'
import { CategoryBrandProvider } from './pages/CategoryBrand/context'
import { ReportProvider } from './pages/Reports/context'

export let toast: any

function App() {
  const [count, setCount] = useState(0)
  toast = useRef(null)

  return (
    <>
      <Toast ref={toast} />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className='spin'>
              <Spin />
            </div>
          }
        >
          <ReportProvider>
            <CategoryBrandProvider>
              <Router />
            </CategoryBrandProvider>
          </ReportProvider>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
