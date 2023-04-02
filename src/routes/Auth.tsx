import { routerType } from '../types/router.types'

// Pages | Components

import {
  Dashboard,
  Products,
  Oferts,
  Reports,
  Clients,
  Delivery,
} from '../pages'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Delivery />,
    title: 'home',
  },
]
