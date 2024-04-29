import { useEffect, useState } from 'react'
import { Button, Card } from '../../../components/shared'
import { PageHeader } from '../../../components/layout'
import { Filters } from './components/Filters'
import { OrdersTable } from '../../Orders/components'
import CardWidget from '../../Reports/components/CardWidget'
import { IOrder } from '../../Orders/models/IOrder'
import { getTodayOrders } from './services'
import CuadreModal from './components/modal/ClientModal/CuadreModal'
import SpendModal from './components/modal/SpendModal/SpendModal'

export interface CuadreProps {}

const Cuadre = ({}: CuadreProps) => {
  const [orders, setOrders] = useState<{
    orders: IOrder[]
    cash: number
    card: number
    transfer: number
  }>({ orders: [], cash: 0, card: 0, transfer: 0 })

  useEffect(() => {
    handleGetOrders()
  }, [])

  console.log('orders', orders)
  const handleGetOrders = async () => {
    try {
      const data = await getTodayOrders()
      setOrders(data)
    } catch (error: any) {
      console.error('ERROR GETTING TODAY ORDERS: ', error.message)
    }
  }

  return (
    <div>
      <PageHeader
        title='Cuadre'
        right={
          <div className='flex items-center gap-4'>
            <i
              data-te-toggle='modal'
              data-te-target='#spendModal'
              data-te-ripple-init
              data-te-ripple-color={'dark'}
              className='btn !bg-white !text-red-600 !shadow-red-100 cursor-pointer'
            >
              Registrar gasto
            </i>
            <i
              data-te-toggle='modal'
              data-te-target='#cuadrarModal'
              data-te-ripple-init
              data-te-ripple-color={'light'}
              // text='Cuadrar'
              className='btn !bg-purple-900 text-white cursor-pointer'
            >
              Cuadrar
            </i>
          </div>
        }
      />

      <Card title=''>
        <Filters />
      </Card>

      {/* Information */}
      <Card title='' className='my-6 py-3'>
        <div className='grid sm:grid-cols-4 gap-5 w-full'>
          <CardWidget
            color='purple'
            background='purple'
            title='Numero de ordenes'
            value={orders?.orders?.length}
            noCash
          />
          <CardWidget
            color='green'
            background='green'
            title='Efectivo'
            value={orders.cash}
          />
          <CardWidget
            color='blue'
            background='blue'
            title='Tarjeta'
            value={orders.card}
          />
          <CardWidget
            color='blue'
            background='blue'
            title='Transferencia'
            value={orders.transfer}
          />
        </div>
      </Card>

      {/* Table */}
      <Card title='Ordenes' className='mt-6' bodyClassName='mt-4'>
        <OrdersTable orders={orders.orders} />
      </Card>

      <CuadreModal orders={orders.orders} />
      <SpendModal orders={[]} />
    </div>
  )
}

export default Cuadre
