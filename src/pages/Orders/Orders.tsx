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
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'

interface IOrdersProps {
  children?: React.ReactNode
}

const Orders: React.FC<IOrdersProps> = (props) => {
  const [data, setData] = useState<any>()
  const { orders, setDate, date } = useOrderState()
  const [dateType, setDateType] = useState<'single' | 'range' | 'multiple'>(
    'single'
  )

  useEffect(() => {
    if (orders) {
    }
  }, [orders])

  return (
    <>
      {/* Header */}
      <PageHeader
        title='Ventas'
        right={
          <div className='flex'>
            {/* <Button
              icon='fa fa-calendar text-purple-900'
              color='white'
              text='Calendario'
              className='!px-3 !hover:shadow-none mr-3'
            /> */}
            <Dropdown
              className='h-[40px] mr-3'
              options={[
                { title: 'Fecha unica', value: 'single' },
                { title: 'Fecha por rango', value: 'range' },
              ]}
              optionValue='value'
              optionLabel='title'
              value={dateType}
              onChange={(e) => setDateType(e.target.value)}
            />
            <Calendar
              className='h-[40px] mr-3'
              inputClassName='!border-0 hover:outline-none '
              showIcon
              iconPos='left'
              icon={<i className='fa fa-calendar '></i>}
              value={date}
              onChange={(e) => setDate(e.value)}
              selectionMode={dateType}
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
