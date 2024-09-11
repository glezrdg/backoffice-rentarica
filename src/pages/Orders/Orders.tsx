import React, { useEffect, useState } from 'react'
import './styles.css'

// Components
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { PageHeader } from '../../components/layout'
import { Button, Card, TopProducts } from '../../components/shared'
import { Header, PaymentMethodsTable } from './components'
import CuadresTable from './components/tables/CuadresTable'
import { useOrderState } from './context'
// import PdfReportModal from './components/modal/PdfReportModal'

interface IOrdersProps {
  children?: React.ReactNode
}

const Orders: React.FC<IOrdersProps> = (props) => {
  const [data, setData] = useState<any>()
  const { orders, setDate, date } = useOrderState()
  const [dateType, setDateType] = useState<'single' | 'range' | 'multiple'>(
    'single'
  )
  const [reportModal, setReportModal] = useState(false)

  useEffect(() => {
    if (orders) {
    }
  }, [orders])

  return (
    <>
      {/* Header */}
      <PageHeader
        title='Ventas'
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
              onClick={() => setReportModal(true)}
              color='warning'
              text='Exportar'
              className='!px-3 !hover:shadow-none !bg-purple-900'
            />
          </div>
        }
      />

      {/* Header */}
      <Card title='' className='mb-6'>
        <Header />
      </Card>

      {/* TABLE */}
      <Card title='Cuadres'>
        <CuadresTable />
      </Card>
      {/* GRAPHS */}
      <div className='grid lg:grid-cols-2 h-fit gap-5 my-8'>
        {/* Payment Methods */}

        <TopProducts orders={orders} />

        {/* Payment methods */}
        <Card title='Metodos de pago' eye>
          <PaymentMethodsTable />
        </Card>
      </div>

      {/* <PdfReportModal
        open={reportModal}
        onClose={() => setReportModal(false)}
      /> */}
    </>
  )
}

export default Orders
