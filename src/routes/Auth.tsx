import { routerType } from '../types/router.types'

// Pages | Components

import { Login, Register } from '../pages'

export const authPages: routerType[] = [
  {
    path: '/',
    element: <Login />,
    title: 'home',
  },
  {
    path: '/register',
    element: <Register />,
    title: 'home',
  },
]
