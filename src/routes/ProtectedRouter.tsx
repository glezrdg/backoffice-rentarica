import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { routerType } from '../types/router.types'
import { adminPages } from './admin/Dashboard'
import { useAppSelector } from '../redux/store'
import Router from './Router'
import useQuery from '../hooks/useQuery'
import { getItem } from '../utility/localStorageControl'

const pagesData: routerType[] = [...adminPages]

const ProtectedRouter = () => {
  const { user } = useAppSelector((state: any) => state.auth)

  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })

  return (
    <>
      {user && !getItem('stripe_url') ? (
        <Layout>
          <Routes>{pageRoutes}</Routes>
        </Layout>
      ) : (
        <Router />
      )}
    </>
  )
}

export default ProtectedRouter
