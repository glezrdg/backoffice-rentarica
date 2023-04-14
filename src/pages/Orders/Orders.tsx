import React from 'react'
import './styles.css'

// Components
import PieChart from '../../components/charts/PieChart'
import { PageHeader } from '../../components/layout'
import { Card, TopProducts, Button } from '../../components/shared'
import { Header, OrdersTable, PaymentMethodsTable } from './components'

interface IOrdersProps {
  children?: React.ReactNode
}

const Orders: React.FC<IOrdersProps> = (props) => {
  return (
    <>
      {/* Header */}
      <PageHeader
        title='Ordenes'
        right={
          <div className='flex'>
            <Button
              icon='fa fa-calendar text-purple-500'
              color='white'
              text='Calendario'
              className='!px-3 !hover:shadow-none mr-3'
            />
            <Button
              icon='fa fa-file-export'
              color='warning'
              text='Exportar'
              className='!px-3 !hover:shadow-none'
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
        <Card
          title='provincias'
          eye
          className='h-full'
          bodyClassName='grid place-items-center h-[80%] w-[100%] '
        >
          <PieChart />
        </Card>

        {/* Payment methos */}
        <Card title='Metodos de pago' eye>
          <PaymentMethodsTable />
        </Card>
      </div>

      <TopProducts />
    </>
  )
}

export default Orders
