import React, { useEffect, useState } from 'react'
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
import OrdersTable from '../Orders/components/tables/OrdersTable'
import ReportModal from './components/modal/ReportModal'
import { useParams } from 'react-router-dom'
import { getReport } from './services'
import ShoppingTable from '../Shopping/components/tables/ShoppingTable'

interface IReportsPageProps {
  children?: React.ReactNode
}

const ReportsPage: React.FC<IReportsPageProps> = (props) => {
  const { report, setReport } = useReportState()
  const { id } = useParams()

  console.log(report)

  useEffect(() => {
    handleGetReport()
  }, [])

  const handleGetReport = async () => {
    try {
      const data = await getReport(id!)
      setReport(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/* Header */}
      <PageHeader
        goBack
        title='Detalle de reporte'
        right={
          <div className='flex'>
            <Button
              icon='fa fa-file-export'
              text='Exportar'
              className='!px-3 !hover:shadow-none !bg-purple-900'
            />
          </div>
        }
      />

      <Card title='' className='my-6 py-3'>
        <div className='grid sm:grid-cols-3 gap-5 w-full'>
          <CardWidget
            color='green'
            background='green'
            title='Ganancias'
            value={report?.sellsReport?.totalAmonutWin!}
          />
          <CardWidget
            color='purple'
            background='purple'
            title='Ventas'
            value={report?.sellsReport?.totalAmonutSell!}
          />
          <CardWidget
            color='blue'
            background='blue'
            title='Compras'
            value={report?.shoppingReport?.totalAmountBuy!}
          />
        </div>
      </Card>

      {/* TABLE */}
      <Card title='Historial de ventas' bodyClassName='mt-4'>
        <OrdersTable orders={report?.sellsReport?.orders} />
      </Card>

      <Card title='Historial de compras' bodyClassName='mt-4' className='mt-6'>
        <ShoppingTable shoppings={report?.shoppingReport.shoppings} />
      </Card>
      {/* <ReportsTable /> */}

      {/* GRAPHS */}
      <div className='grid md:grid-cols-2 h-fit gap-5 mt-6'>
        <TopProducts value={report?.sellsReport?.productsQty} />
        <Card title='Metodos de pago'>
          <PaymentMethodsTable data={report?.sellsReport?.paymentMethodQty} />
        </Card>
      </div>

      <ReportModal />
    </>
  )
}

export default ReportsPage
