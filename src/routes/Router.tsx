import { Route, Routes } from 'react-router-dom'
import { routerType } from '../types/router.types'
import { authPages } from './Auth'

const pagesData: routerType[] = [...authPages]

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return (
    <div className='bg-white grid w-full'>
      <Routes>{pageRoutes}</Routes>
    </div>
  )
}

export default Router
