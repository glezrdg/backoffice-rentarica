import { routerType } from '../../types/router.types'

// Pages | Components
import {
  CategoryBrand,
  Clients,
  Dashboard,
  Delivery,
  Notes,
  Oferts,
  Orders,
  Products,
  Reports,
  Shopping,
} from '../../pages'
import { OrderProvider } from '../../pages/Orders/context'
import { NoteProvider } from '../../pages/Notes/context'
import { ClientProvider } from '../../pages/Clients/context'
import ShoppingProvider from '../../pages/Shopping/context'
import Caja from '../../pages/Employee/Caja'
import Cuadre from '../../pages/Employee/Cuadre'
import Planes from '../../pages/Planes'
import SuccessSubscription from '../../pages/SuccessSubscription'

export const adminPages: routerType[] = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
    title: 'home',
  },
  {
    path: '/admin/inventory',
    element: <Products />,
    title: 'home',
  },
  {
    path: '/admin/shopping',
    element: (
      <ShoppingProvider>
        <Shopping />
      </ShoppingProvider>
    ),
    title: 'home',
  },
  {
    path: '/admin/orders',
    element: (
      <OrderProvider>
        <Orders />
      </OrderProvider>
    ),
    title: 'home',
  },
  {
    path: '/admin/clients',
    element: (
      <ClientProvider>
        <Clients />
      </ClientProvider>
    ),
    title: 'home',
  },
  {
    path: '/admin/reports',
    element: <Reports />,
    title: 'home',
  },
  {
    path: '/admin/oferts',
    element: <Oferts />,
    title: 'home',
  },
  {
    path: '/admin/Delivery',
    element: <Delivery />,
    title: 'home',
  },
  {
    path: '/admin/category_brand',
    element: <CategoryBrand />,
    title: 'home',
  },
  {
    path: '/admin/notes',
    element: (
      <NoteProvider>
        <Notes />
      </NoteProvider>
    ),
    title: 'home',
  },
  {
    path: '/admin/caja',
    element: <Caja />,
    title: 'home',
  },
  {
    path: '/admin/cuadre',
    element: <Cuadre />,
    title: 'home',
  },
  {
    path: '/admin/planes',
    element: <Planes />,
    title: 'home',
  },
  {
    path: '/success_payment',
    element: <SuccessSubscription />,
    title: 'home',
  },
  {
    path: '*',
    element: <Dashboard />,
    title: 'home',
  },
]
