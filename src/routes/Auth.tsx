import { routerType } from '../types/router.types'

// Pages | Components

import { Dashboard, Products, Oferts, Reports, Clients } from '../pages'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Oferts />,
    title: 'home',
  },
]
