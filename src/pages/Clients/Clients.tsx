import React from 'react'
import './styles.css'

// Components
import PieChart from '../../components/charts/PieChart'
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared'
import {
  ClientsTable,
  Header,
  OrdersTable,
  PaymentMethodsTable,
} from './components'
import { ClientProvider } from './context'

interface IClientsProps {
  children?: React.ReactNode
}

const Clients: React.FC<IClientsProps> = (props) => {
  return (
    <ClientProvider>
      <>
        {/* Header */}
        <PageHeader
          title='Clientes'
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

        <Header />

        {/* TABLE */}
        <ClientsTable />

        {/* GRAPHS */}
        <div className='grid md:grid-cols-2 gap-5'>
          <Card
            title='Provincias'
            eye
            className=' h-[inherit] mt-6'
            bodyClassName='p-2 grid place-items-center pt-12'
          >
            <PieChart />
          </Card>
          <Card title='Metodos de pago' eye className='mt-6'>
            <PaymentMethodsTable />
          </Card>
        </div>
      </>
    </ClientProvider>
  )
}

export default Clients
