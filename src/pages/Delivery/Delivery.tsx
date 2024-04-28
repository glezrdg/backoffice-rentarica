import React, { useState } from 'react'
import { ICompany } from './models'
import './styles.css'

// Components
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared'
import { Header, SideCreate, UsersTable } from './components'
import { DeliveryProvider, useDeliveryState } from './context'

interface IDeliveryProps {
  children?: React.ReactNode
}

const Delivery: React.FC<IDeliveryProps> = (props) => {
  const { setCompany } = useDeliveryState()

  const [createDelivery, setCreateDelivery] = useState(false)
  const [formType, setFormType] = useState('')

  const openCreate = (type: string) => {
    setFormType(type)
    setCreateDelivery(true)
  }

  return (
    <DeliveryProvider>
      <>
        <SideCreate
          active={createDelivery}
          close={() => {
            setCompany({} as ICompany)
            setCreateDelivery(false)
          }}
          type={formType}
        />
        {/* Header */}

        <PageHeader
          title='Usuarios'
          right={
            <div className='flex'>
              <Button
                icon='fa fa-plus'
                color='warning'
                text='Agregar usuario'
                className='!px-3 !hover:shadow-none !bg-purple-900'
                onClick={() => openCreate('delivery')}
              />
            </div>
          }
        />

        <Card title=''>
          <Header />
        </Card>

        <Card title='Usuarios registrados' className='col-span-2 mt-6'>
          <UsersTable />
        </Card>
        <div className='grid grid-cols-3 mt-6 gap-6'>
          {/* TABLE */}

          {/* <Card title='Informacion de cuenta' className='col-span-1'></Card> */}
        </div>
      </>
    </DeliveryProvider>
  )
}

export default Delivery
