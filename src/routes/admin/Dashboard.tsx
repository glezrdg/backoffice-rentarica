import { routerType } from '../../types/router.types'

// Pages | Components
import { Dashboard } from '../../pages/Dashboard'
import { Products } from '../../pages/Products'

export const authPages: routerType[] = [
  {
    path: '',
    element: <Products />,
    title: 'home',
  },
]
