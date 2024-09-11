import { Suspense, useState, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toast, ToastProps } from 'primereact/toast'
import './App.css'

// Components
import Spin from './components/shared/Spin'

//Router
import ProtectedRouter from './routes/ProtectedRouter'
import Router from './routes/Router'
import { CategoryBrandProvider } from './pages/CategoryBrand/context'
import { ReportProvider } from './pages/Reports/context'
import { useAppSelector } from './redux/store'
import { InventoryProvider } from './pages/Products/context'
import ScrollToTop from './components/layout/ScrollToTop'

export let toast: any

function App() {
  const { user } = useAppSelector((state) => state.auth)
  const [count, setCount] = useState(0)
  toast = useRef(null)

  return (
    <>
      <Toast ref={toast} />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className='spin'>
              <Spin />
            </div>
          }
        >
          <ReportProvider>
            <CategoryBrandProvider>
              <InventoryProvider>
                <ProtectedRouter />
              </InventoryProvider>
            </CategoryBrandProvider>
          </ReportProvider>

          {/* <Router /> */}
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
