import React, { useEffect, useState } from 'react'
import './styles.css'

// Components
import PieChart from '../../components/charts/PieChart'
import { PageHeader } from '../../components/layout'
import { Button, Card, TopProducts } from '../../components/shared'
import Spin from '../../components/shared/Spin/Spin'
import { Header, OrdersTable, PaymentMethodsTable } from './components'
import { useOrderState } from './context'
import { IOrder } from './models/IOrder'

interface IOrdersProps {
  children?: React.ReactNode
}

const Orders: React.FC<IOrdersProps> = (props) => {
  const [data, setData] = useState<any>()
  const { orders } = useOrderState()

  useEffect(() => {
    if (orders) {
    }
  }, [orders])

  return (
    <>
      {/* Header */}
      <PageHeader
        title='Ordenes'
        right={
          <div className='flex'>
            <Button
              icon='fa fa-calendar text-purple-900'
              color='white'
              text='Calendario'
              className='!px-3 !hover:shadow-none mr-3'
            />
            <Button
              icon='fa fa-file-export'
              color='warning'
              text='Exportar'
              className='!px-3 !hover:shadow-none !bg-purple-900'
            />
          </div>
        }
      />

      {/* Header */}
      <Header />

      {/* TABLE */}
      <OrdersTable />

      {/* GRAPHS */}
      <div className='grid md:grid-cols-2 h-fit gap-5 mt-8'>
        <TopProducts orders={orders} />

        {/* Payment methos */}
        <Card title='Metodos de pago' eye>
          <PaymentMethodsTable />
        </Card>
      </div>
    </>
  )
}

export default Orders
