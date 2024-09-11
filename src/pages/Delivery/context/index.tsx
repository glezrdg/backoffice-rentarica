import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { ICompany, IDelivery } from '../models'
import { getCompanies, postCompany } from '../services/company'
import { getEmployees, getUserOrders, postEmployee } from '../services/delivery'
import { IOrder } from '../../../pages/Orders/models/IOrder'

// Services

const initialState: InitialStateProps = {
  deliveries: [],
  searchDelivery: [],
  delivery: null,
  userOrders: [],
  addDelivery: () => {},
  updateDelivery: () => {},
  removeDelivery: () => {},
  setSearchDelivery: () => {},
  setDelivery: () => {},
  handleGetUserOrders: (id: string) => {},
}

const DeliveryContext = createContext(initialState)

export interface InventoryProviderProps {
  children: ReactElement
}

export const DeliveryProvider: React.FC<InventoryProviderProps> = ({
  children,
}) => {
  const [searchCompanies, setSearchCompanies] = useState<ICompany[]>([])
  const [searchCompany, setSearchCompany] = useState<string>('')

  const [deliveries, setDeliveries] = useState<IDelivery[]>(
    initialState.deliveries
  )
  const [searchDeliveries, setSearchDeliveries] = useState<IDelivery[]>([])
  const [searchDelivery, setSearchDelivery] = useState<string>('')
  const [delivery, setDelivery] = useState<IDelivery | null>(
    initialState.delivery
  )

  const [userOrders, setUserOrders] = useState<IOrder[]>([])

  let activeDelivery = searchDelivery ? searchDeliveries : deliveries

  useEffect(() => {
    getInitialState()
  }, [])

  useEffect(() => {
    if (delivery?._id) {
      handleGetUserOrders(delivery?._id)
    }
  }, [delivery])

  const getInitialState = async () => {
    try {
      const companyData = await getCompanies()
      const deliveryData = await getEmployees()
      setDeliveries(deliveryData)
    } catch (error) {}
  }

  // DELIVERY

  const addDelivery = async (body: IDelivery) => {
    try {
      const delivery = await postEmployee(body)
      setDeliveries((prev) => [delivery, ...prev])
    } catch (error) {}
  }

  const handleGetUserOrders = async (user: string) => {
    try {
      const orders = await getUserOrders(user)
      setUserOrders(orders)
    } catch (error: any) {
      console.log('ERROR GETTINGU USER ORDERS: ', error.message)
    }
  }

  const updateDelivery = (body: IDelivery) => {
    setDeliveries((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeDelivery = (id: string) => {
    setDeliveries((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <DeliveryContext.Provider
      value={{
        deliveries: activeDelivery,
        userOrders,
        delivery,
        setDelivery,
        addDelivery,
        removeDelivery,
        updateDelivery,
        setSearchDelivery,
        handleGetUserOrders,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}

export const useDeliveryState = () => useContext(DeliveryContext)

export interface InitialStateProps {
  deliveries: IDelivery[]
  delivery: IDelivery | null
  userOrders: IOrder[]
  searchDelivery?: IDelivery[]
  setSearchDelivery: (string: string) => void
  addDelivery: (product: IDelivery) => void
  updateDelivery: (product: IDelivery) => void
  removeDelivery: (id: string) => void
  handleGetUserOrders: (id: string) => void
  setDelivery: (product: IDelivery) => void
}
