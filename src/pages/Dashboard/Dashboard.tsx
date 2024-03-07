import React, { useState } from 'react'

// Components
import { WidgetCard } from './components/WidgetCard'
import { Card } from '../../components/shared/Card'
import { BarChart, LineChart } from '../../components/charts'
import TopProducts from '../../components/shared/TopProducts/TopProducts'
import ShowMoney from './components/ShowMoney/ShowMoney'
import RecentOrdersTable from './components/tables/RecentOrdersTable'
import { PageHeader } from '../../components/layout'
import { ProfitsSemester } from './components/charts/ProfitsSemester'
import { useReportState } from '../Reports/context'

interface IDashboardProps {
  children?: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const { reports, report } = useReportState()
  const [sidenav, setSidenav] = useState(false)

  return (
    <>
      <PageHeader title='Dashboard' />

      {/* Cards */}
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 lg:gap-6`}
      >
        <WidgetCard title={'Ordenes'} />
        <WidgetCard title={'Compras'} />
        <WidgetCard title={'Nuevos Usuarios'} />
        <WidgetCard title={'Ordenes Enviadas'} />
      </div>

      {/* PROFIT */}
      <Card title='Total ganancias' className='mt-6 md:mt-10' toolbar>
        <div className='my-8 flex justify-evenly sm:justify-center'>
          <ShowMoney
            title='Periodo actual'
            money={report?.sellsReport?.totalAmonutSell! || 0}
            titleClassName='text-purple-500'
            badgeClassName='bg-purple-500'
          />
          {/* <ShowMoney title='Periodo actual' money={24856} /> */}
        </div>
        <ProfitsSemester color='purple' />
      </Card>

      {/* TOP */}
      <TopProducts value={report?.sellsReport?.productsQty} />

      {/* <div className='grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 mt-6 lg:mt-10'>
        <Card title='Ordenes recientes' eye>
          <RecentOrdersTable />
        </Card>

        <Card title='Usuarios Registrados' eye>
          <RecentOrdersTable />
        </Card>
      </div> */}
    </>
  )
}

export default Dashboard
