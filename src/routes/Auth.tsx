import { routerType } from '../types/router.types'

// Pages | Components
import { Dashboard } from '../pages/Dashboard'
import { Products } from '../pages/Products'
import { Orders } from '../pages/Orders'
import { Clients } from '../pages/Clients'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Clients />,
    title: 'home',
  },
]
