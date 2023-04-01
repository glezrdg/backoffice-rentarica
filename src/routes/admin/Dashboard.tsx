import { routerType } from '../../types/router.types'

// Pages | Components
import { Dashboard } from '../../pages/Dashboard'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Dashboard />,
    title: 'home',
  },
]
