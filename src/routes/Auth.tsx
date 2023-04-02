import { routerType } from '../types/router.types'

// Pages | Components

import {
  Dashboard,
  Products,
  Oferts,
  Reports,
  Clients,
  Delivery,
  Notes,
} from '../pages'
import { CategoryBrand } from '../pages/CategoryBrand'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Notes />,
    title: 'home',
  },
]
