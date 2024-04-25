import { routerType } from '../types/router.types'

// Pages | Components

import { Login, Notes, Register } from '../pages'
import Home from '../pages/Home'

export const authPages: routerType[] = [
  {
    path: '/login',
    element: <Login />,
    title: 'home',
  },
  {
    path: '/register',
    element: <Register />,
    title: 'home',
  },
  {
    path: '/',
    element: <Home />,
    title: 'home',
  },
]
