import React, { useState } from 'react'
import './styles.css'

// Components
import { Button } from '../../components/shared/Button'
import { Card, TopProducts } from '../../components/shared'
import { PaymentMethodsTable } from '../Clients/components'
import { PageHeader } from '../../components/layout'
import PieChart from '../../components/charts/PieChart'
import CardWidget from './components/CardWidget/CardWidget'
import ReportsTable from './components/tables/ReportsTable/ReportsTable'

interface IReportsProps {
  children?: React.ReactNode
}

const Reports: React.FC<IReportsProps> = (props) => {
  return (
    <>
      {/* Header */}
      <PageHeader
        title='Reportes'
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

      <div className='my-6'>
        <div className='grid sm:grid-cols-3 gap-5 w-full'>
          <CardWidget color='green' title='Neto' />
          <CardWidget color='indigo' title='Venta' />
          <CardWidget color='blue' title='Compra' />
        </div>
      </div>

      {/* TABLE */}
      <ReportsTable />

      {/* GRAPHS */}
      <div className='grid md:grid-cols-2 h-fit gap-5 mt-6'>
        <Card
          title='Provincias'
          className='h-full'
          bodyClassName='flex justify-center items-center h-[90%]'
          eye
        >
          <PieChart />
        </Card>
        <Card title='Metodos de pago'>
          <PaymentMethodsTable />
        </Card>
      </div>

      <TopProducts />
    </>
  )
}

export default Reports
