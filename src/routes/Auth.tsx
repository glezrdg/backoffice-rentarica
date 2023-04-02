import { routerType } from '../types/router.types'

// Pages | Components
import { Dashboard } from '../pages/Dashboard'
import { Products } from '../pages/Products'
import { Orders } from '../pages/Orders'
import { Clients } from '../pages/Clients'
import { Reports } from '../pages/Reports'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Reports />,
    title: 'home',
  },
]
