import React, { useState } from 'react'
import './styles.css'
import { useReportState } from './context'

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
  const { report } = useReportState()

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
          <CardWidget color='green' title='Neto' value={0} />
          <CardWidget
            color='indigo'
            title='Venta'
            value={report?.sellsReport?.totalAmonutSell!}
          />
          <CardWidget color='blue' title='Compra' value={0} />
        </div>
      </div>

      {/* TABLE */}
      <ReportsTable />

      {/* GRAPHS */}
      <div className='grid md:grid-cols-2 h-fit gap-5 mt-6'>
        <Card
          title='Provincias'
          className='h-full'
          bodyClassName='flex justify-center items-center'
          eye
        >
          <PieChart
            provinces={report?.sellsReport.provincesQty.map((i) => ({
              province: i.name,
              qty: i.qty,
            }))}
          />
        </Card>
        <Card title='Metodos de pago'>
          <PaymentMethodsTable data={report?.sellsReport.paymentMethodQty} />
        </Card>
      </div>

      <TopProducts value={report?.sellsReport.productsQty} />
    </>
  )
}

export default Reports
