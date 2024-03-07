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
import ShoppingProvider from '../../pages/Shopping/context'

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
    element: <Clients />,
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
]
