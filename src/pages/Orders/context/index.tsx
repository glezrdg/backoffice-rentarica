import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { IOrder } from '../models/IOrder'

// Services
import { getOrders } from '../services'
import { toast } from '../../../App'

const initialState: InitialStateProps = {
  orders: [],
  order: null,
  addOrder: () => {},
  updateOrder: () => {},
  removeOrder: () => {},
  deliverOrder: () => {},
  setSearch: () => {},
  setOrder: () => {},
}

const OrderContext = createContext(initialState)

export interface InventoryProviderProps {
  children: ReactElement
}

export const OrderProvider: React.FC<InventoryProviderProps> = ({
  children,
}) => {
  const [orders, setOrders] = useState<IOrder[]>(initialState.orders)
  const [searchOrders, setSearchOrders] = useState<IOrder[]>([])
  const [search, setSearch] = useState<string>('')
  const [order, setOrder] = useState<IOrder | null>(initialState.order)

  let activeOrder = search ? searchOrders : orders

  useEffect(() => {
    getInitialState()
  }, [])

  useEffect(() => {
    if (search) {
      handleSearchOrder()
    }
  }, [search])

  const handleSearchOrder = () => {
    let searched = orders.filter((p) =>
      p._id!.toLowerCase().includes(search.toLowerCase())
    )

    setSearchOrders(searched)
  }

  const getInitialState = async () => {
    try {
      const ordersData = await getOrders()
      setOrders(ordersData)
    } catch (error) {}
  }

  const addOrder = (body: IOrder) => {
    setOrders((prev) => [...prev, { _id: `${prev.length + 1}`, ...body }])
  }

  const updateOrder = (body: IOrder) => {
    setOrders((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const deliverOrder = (id: string) => {
    const delivery = {
      isDelivered: true,
      deliveredAt: new Date().toISOString(),
    }
    setOrders((prev) =>
      prev.map((p) => (p._id === id ? { ...p, ...delivery } : p))
    )

    setOrder({ ...order, ...delivery } as IOrder)

    toast.current?.show({
      severity: 'success',
      summary: 'Orden enviada!',
      detail: `Has enviado 1 orden exitosamente`,
    })
  }

  const removeOrder = (id: string) => {
    setOrders((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <OrderContext.Provider
      value={{
        orders: activeOrder,
        order,
        addOrder,
        updateOrder,
        deliverOrder,
        removeOrder,
        setOrder,
        setSearch,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderState = () => useContext(OrderContext)

export interface InitialStateProps {
  orders: IOrder[]
  order: IOrder | null
  addOrder: (product: IOrder) => void
  updateOrder: (product: IOrder) => void
  removeOrder: (id: string) => void
  deliverOrder: (id: string) => void
  setSearch: (string: string) => void
  setOrder: (product: IOrder) => void
}
