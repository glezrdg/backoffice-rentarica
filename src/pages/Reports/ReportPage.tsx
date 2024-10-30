import React, { useEffect, useState } from 'react'
import './styles.css'
import { useReportState } from './context'

// Components
import { Button } from '../../components/shared/Button'
import { Card, TopProducts } from '../../components/shared'
import { PageHeader } from '../../components/layout'
import PieChart from '../../components/charts/PieChart'
import CardWidget from './components/CardWidget/CardWidget'
import ReportsTable from './components/tables/ReportsTable/ReportsTable'
import OrdersTable from '../Orders/components/tables/OrdersTable'
import ReportModal from './components/modal/ReportModal'
import { useParams } from 'react-router-dom'
import { getReport } from './services'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'

interface IReportsPageProps {
  children?: React.ReactNode
}

const ReportsPage: React.FC<IReportsPageProps> = (props) => {
  const { report, setReport, date, setDate } = useReportState()
  const { id } = useParams()

  const [dateType, setDateType] = useState<'single' | 'range' | 'multiple'>(
    'single'
  )

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
              text='Exportar'
              className='!px-3 !hover:shadow-none !bg-blue-900'
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
            value={0}
          />
          <CardWidget
            color='purple'
            background='purple'
            title='Ventas'
            value={0}
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
      <Card title='Historial de ventas' bodyClassName='mt-4'></Card>

      <Card
        title='Historial de compras'
        bodyClassName='mt-4'
        className='mt-6'
      ></Card>
      {/* <ReportsTable /> */}

      {/* GRAPHS */}
      <div className='grid lg:grid-cols-2 h-fit gap-5 mt-6'>
        <Card title='Metodos de pago'></Card>
      </div>

      <ReportModal />
    </>
  )
}

export default ReportsPage
