import React, { useState } from 'react'
import './styles.css'

import { BarChart } from '../../components/charts'
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared'
import { DeliveryPeopleTable, Header, SideCreateDelivery } from './components'
import DeliveryTable from './components/table/DeliveryTable'

interface IDeliveryProps {
  children?: React.ReactNode
}

const Delivery: React.FC<IDeliveryProps> = (props) => {
  const [createDelivery, setCreateDelivery] = useState(false)
  return (
    <>
      <SideCreateDelivery
        active={createDelivery}
        close={() => setCreateDelivery(false)}
      />
      {/* Header */}

      <PageHeader
        title='Delivery'
        right={
          <div className='flex'>
            <Button
              icon='fa fa-plus'
              color='success'
              text='Compañia'
              className='!px-3 !hover:shadow-none mr-2'
              onClick={() => setCreateDelivery(true)}
            />
            <Button
              icon='fa fa-plus'
              color='warning'
              text='Integrante'
              className='!px-3 !hover:shadow-none'
              onClick={() => setCreateDelivery(true)}
            />
          </div>
        }
      />

      <Header />

      <div className='grid lg:grid-cols-[2fr_1fr] gap-5'>
        {/* TABLE */}
        <Card title='Agencias' bodyClassName='p-4'>
          <DeliveryTable />
        </Card>
        <Card title='Usos' className='h-full hidden lg:block'>
          <div className='bg-purple-100 w-full my-4 py-2 rounded-2xl text-center'>
            <p className='text-purple-600 text-xl'>2,756</p>
            <span className='text-slate-500 text-xs'>Envios</span>
          </div>
          <BarChart color='purple' />
        </Card>
      </div>

      {/* TABLE */}
      <Card title='Delivery personal' className='mt-6'>
        <DeliveryPeopleTable />
      </Card>
    </>
  )
}

export default Delivery
