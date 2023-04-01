import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { routerType } from '../types/router.types'
import pagesData from './pagesData'

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return (
    <Layout>
      <Routes>{pageRoutes}</Routes>
    </Layout>
  )
}

export default Router
