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
import Profile from '../../pages/User/Profile'
import MySubscription from '../../pages/User/MySubscription'
import Settings from '../../pages/User/Settings'
import ReportsPage from '../../pages/Reports/ReportPage'
import Expenses from '../../pages/Expenses'

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
    path: '/admin/gastos',
    element: <Expenses />,
    title: 'home',
  },
  {
    path: '/admin/inversiones',
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
    path: '/admin/reports/:id',
    element: <ReportsPage />,
    title: 'home',
  },
  {
    path: '/admin/oferts',
    element: <Oferts />,
    title: 'home',
  },
  {
    path: '/admin/usuarios',
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
    path: '/admin/perfil',
    element: <Profile />,
    title: 'home',
  },
  {
    path: '/admin/ajustes',
    element: <Settings />,
    title: 'home',
  },
  {
    path: '/admin/mi_suscripcion',
    element: <MySubscription />,
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
