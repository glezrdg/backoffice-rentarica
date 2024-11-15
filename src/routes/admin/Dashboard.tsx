import { routerType } from '../../types/router.types'

// Pages | Components
import { Dashboard } from '../../pages'
import Profile from '../../pages/Profile'
import Properties from '../../pages/Properties'
import { PropertiesProvider } from '../../pages/Properties/context'
import PropertyPage from '../../pages/Properties/PropertyPage'

export const adminPages: routerType[] = [
  // {
  //   path: '/admin/dashboard',
  //   element: <Dashboard />,
  //   title: 'home',
  // },

  {
    path: '/admin/propiedades',
    element: (
      <PropertiesProvider>
        <Properties />
      </PropertiesProvider>
    ),
    title: 'Cuadre',
  },
  {
    path: '/admin/propiedades/:id',
    element: (
      <PropertiesProvider>
        <PropertyPage />
      </PropertiesProvider>
    ),
    title: 'Cuadre',
  },

  // {
  //   path: '/admin/perfil',
  //   element: (
  //     <>
  //       <Profile />
  //     </>
  //   ),
  //   title: 'home',
  // },

  {
    path: '*',
    element: (
      <PropertiesProvider>
        <Properties />
      </PropertiesProvider>
    ),
    title: 'home',
  },
]
