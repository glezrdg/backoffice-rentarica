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

  const getProvincesQty = () => {
    let provinces = new Set<string>()

    orders.map((order) => provinces.add(order.shippingAddress.province))
    let choosenProvinces = Array.from(provinces)
    let data = []

    for (let index = 0; index < choosenProvinces.length; index++) {
      const search = choosenProvinces[index]
      let item = {
        province: search,
        qty: 0,
      }

      item.qty = orders.filter(
        (o) => o.shippingAddress.province === search
      ).length

      data.push(item)
    }

    setData(data)
    console.log('DATA', data)
  }

  useEffect(() => {
    if (orders) {
      getProvincesQty()
      console.log('DATA 2 ', data)
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
          {data?.length ? <PieChart provinces={data} /> : <Spin />}
        </Card>

        {/* Payment methos */}
        <Card title='Metodos de pago' eye>
          <PaymentMethodsTable />
        </Card>
      </div>

      <TopProducts orders={orders} />
    </>
  )
}

export default Orders
