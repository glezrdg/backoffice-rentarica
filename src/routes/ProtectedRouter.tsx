import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { routerType } from '../types/router.types'
import { adminPages } from './admin/Dashboard'

const pagesData: routerType[] = [...adminPages]

const ProtectedRouter = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return (
    <Layout>
      <Routes>{pageRoutes}</Routes>
    </Layout>
  )
}

export default ProtectedRouter
