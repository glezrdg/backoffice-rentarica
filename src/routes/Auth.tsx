import { routerType } from '../types/router.types'

// Pages | Components
import { Dashboard } from '../pages/Dashboard'
import { Products } from '../pages/Products'
import { Orders } from '../pages/Orders'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Orders />,
    title: 'home',
  },
]
