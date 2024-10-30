import React, { useEffect, useState } from 'react'

// Components
import { PageHeader } from '../../components/layout'
import { Card } from '../../components/shared/Card'
import TopProducts from '../../components/shared/TopProducts/TopProducts'
import { useReportState } from '../Reports/context'
import ShowMoney from './components/ShowMoney/ShowMoney'
import { WidgetCard } from './components/WidgetCard'
import { ProfitsSemester } from './components/charts/ProfitsSemester'
import DailySchedule from '../../components/DailySchedule'
import CardWidget from '../Reports/components/CardWidget'
import ProvinceChart from '../../components/charts/PieChart'

interface IDashboardProps {
  children?: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const { reports, report, getReports } = useReportState()
  const [sidenav, setSidenav] = useState(false)

  useEffect(() => {
    getReports({})
  }, [])

  return (
    <>
      <div className='grid sm:grid-cols-3 gap-5 w-full mb-2'>
        <CardWidget
          color='green'
          background='green'
          title='Completadas hoy'
          noCash
          value={6}
        />
        <CardWidget
          color='yellow'
          background='yellow'
          title='Semana pasada'
          noCash
          value={10}
        />
        <CardWidget
          color='blue'
          background='blue'
          noCash
          title='Mes pasado'
          value={33}
        />
      </div>

      <Card title='' bodyClassName='h-[300px]' className='mb-6'></Card>

      <Card title='Usuarios' bodyClassName='grid grid-cols-[300px_1fr] h-full'>
        <div className='h-[300px] w-full text-center grid place-items-center'>
          <div>
            <h3 className='text-8xl'>8</h3>
            <p>Nuevos pacientes</p>
          </div>
        </div>
        <ProfitsSemester color='blue' />
      </Card>
    </>
  )
}

export default Dashboard
