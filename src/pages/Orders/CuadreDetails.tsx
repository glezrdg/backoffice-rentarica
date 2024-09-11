import React, { useEffect, useState } from 'react'
import { useOrderState } from './context'
import './styles.css'

// Components
import { PageHeader } from '../../components/layout'
import { Card, TopProducts } from '../../components/shared'
import { Button } from '../../components/shared/Button'
import CardWidget from '../Reports/components/CardWidget/CardWidget'
// import ReportsTable from './components/tables/ReportsTable/ReportsTable'
import OrdersTable from '../Orders/components/tables/OrdersTable'
// import ReportModal from './components/modal/ReportModal'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { useParams } from 'react-router-dom'
import { fetchOneCuadre } from './services'
import { ICuadre } from './models/ICuadre'
import { PaymentMethodsTable } from './components'

interface ICuadreDetailsProps {
  children?: React.ReactNode
}

const CuadreDetail: React.FC<ICuadreDetailsProps> = (props) => {
  const { cuadres, date, setDate } = useOrderState()
  const [cuadre, setCuadre] = useState<ICuadre>()
  const { id } = useParams()

  const [dateType, setDateType] = useState<'single' | 'range' | 'multiple'>(
    'single'
  )

  console.log('CUADRE', cuadre)

  useEffect(() => {
    handleGetReport()
  }, [id])

  const handleGetReport = async () => {
    try {
      const cuadre = await fetchOneCuadre(id!)
      setCuadre(cuadre)
      console.log('ID', cuadre)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/* Header */}
      <PageHeader
        goBack
        title='Detalle de cuadre'
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
            title='Efectivo'
            value={cuadre?.cash || 0}
          />
          <CardWidget
            color='purple'
            background='purple'
            title='Tarjeta'
            value={cuadre?.card || 0}
          />
          <CardWidget
            color='blue'
            background='blue'
            title='Total'
            value={cuadre?.totalAmonutSell || 0}
          />
        </div>
      </Card>

      {/* TABLE */}
      <Card title='Historial de ventas' bodyClassName='mt-4'>
        {cuadre ? <OrdersTable orders={cuadre?.orders} /> : <p>Cargando...</p>}
      </Card>

      <div className='grid lg:grid-cols-2 h-fit gap-5 my-8'>
        {/* Payment Methods */}

        <TopProducts orders={cuadre?.orders} />

        {/* Payment methods */}
        <Card title='Metodos de pago' eye>
          <PaymentMethodsTable orders={cuadre?.orders} />
        </Card>
      </div>

      {/* <ReportModal /> */}
    </>
  )
}

export default CuadreDetail
