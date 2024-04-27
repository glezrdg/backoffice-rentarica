import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { IOrder } from '../models/IOrder'

// Services
import {
  getOrders as fetchOrders,
  getOneOrder,
  deliverOrder as fetchDeliverOrder,
  postOrder,
} from '../services'
import { toast } from '../../../App'

const initialState: InitialStateProps = {
  orders: [],
  order: null,
  date: new Date(),
  getOrders: () => {},
  selectOrder: () => {},
  addOrder: () => {},
  updateOrder: () => {},
  removeOrder: () => {},
  deliverOrder: () => {},
  setSearch: () => {},
  setDate: () => {},
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
  const [selectedOrder, setSelectedOrder] = useState<any>('')
  const [date, setDate] = useState('')

  let activeOrder = search ? searchOrders : orders

  useEffect(() => {
    const queries: any = {}

    if (date) {
      console.log('DATE TYPEOF', typeof date)
      console.log('DATE', date.length)
      if (!date.length) {
        queries.date = new Date(date).toISOString()
      } else {
        queries.startDate = new Date(date[0]).toISOString()
        queries.endDate = new Date(date[1]).toISOString()
      }
    }

    getOrders(queries)
  }, [date])

  useEffect(() => {
    if (search) {
      handleSearchOrder()
    }
  }, [search])

  useEffect(() => {
    if (selectedOrder) {
      fetchOneOrder()
    }
  }, [selectedOrder])

  const handleSearchOrder = () => {
    let searched = orders.filter((p) =>
      p._id!.toLowerCase().includes(search.toLowerCase())
    )

    setSearchOrders(searched)
  }

  const getOrders = async (queries?: any) => {
    try {
      const ordersData = await fetchOrders(queries)

      setOrders(ordersData)
    } catch (error) {}
  }

  const fetchOneOrder = async () => {
    try {
      const orderData = await getOneOrder(selectedOrder)
      setOrder(orderData)
    } catch (error) {}
  }

  const addOrder = async () => {
    try {
      const order = await postOrder({
        client: '',
        orderItems: [],
        paymentMethod: '',
        shippingPrice: 200,
        taxPrice: 65,
        totalPrice: '',
      })
      toast.success('Compra realizada!')
      return order
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const updateOrder = (body: IOrder) => {
    setOrders((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const deliverOrder = async (id: string) => {
    try {
      await fetchDeliverOrder(id)
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
    } catch (error) {}
  }

  const removeOrder = (id: string) => {
    setOrders((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <OrderContext.Provider
      value={{
        orders: activeOrder,
        selectOrder: setSelectedOrder,
        getOrders,
        order,
        addOrder,
        updateOrder,
        deliverOrder,
        removeOrder,
        setOrder,
        setSearch,
        setDate,
        date,
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
  date: any
  getOrders: (queries?: any) => void
  selectOrder: (id: string) => void
  addOrder: (product: IOrder) => void
  updateOrder: (product: IOrder) => void
  removeOrder: (id: string) => void
  deliverOrder: (id: string) => void
  setSearch: (string: string) => void
  setDate: (value: any) => void
  setOrder: (product: IOrder) => void
}
