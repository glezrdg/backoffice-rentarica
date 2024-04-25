import React, { useState } from 'react'
import './styles.css'
import { ICompany } from './models'

// Components
import { BarChart } from '../../components/charts'
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared'
import { DeliveryPeopleTable, Header, SideCreate } from './components'
import { DeliveryProvider, useDeliveryState } from './context'
import DeliveryTable from './components/table/DeliveryTable'
import ProvincesTable from './components/table/ProvincesTable'
import MunicipiosTable from './components/table/MunicipiosTable'

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
                text='Integrante'
                className='!px-3 !hover:shadow-none'
                onClick={() => openCreate('delivery')}
              />
            </div>
          }
        />

        <Header />

        {/* TABLE */}
        <Card title='Usuarios registrados' className='mt-6'>
          <DeliveryPeopleTable />
        </Card>
      </>
    </DeliveryProvider>
  )
}

export default Delivery
