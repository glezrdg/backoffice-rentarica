import React from 'react'
import './styles.css'

// Components
import { PageHeader } from '../../components/layout'
import { Card, TopProducts } from '../../components/shared'
import { Button } from '../../components/shared/Button'
import { PaymentMethodsTable } from '../Clients/components'
import CardWidget from './components/CardWidget/CardWidget'
import ReportModal from './components/modal/ReportModal'
import ReportsTable from './components/tables/ReportsTable/ReportsTable'
import { useReportState } from './context'

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
              icon='fa fa-file-export'
              text='Exportar'
              className='!px-3 !hover:shadow-none !bg-purple-900'
            />
          </div>
        }
      />

      <Card title='' className='my-6 mb-0 py-3'>
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
            title='Inversiones'
            value={report?.shoppingReport?.totalAmountBuy!}
          />
        </div>
      </Card>

      {/* TABLE */}
      <ReportsTable />

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

export default Reports
