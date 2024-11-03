import React, { useEffect, useState } from 'react'

// Components
import { Card } from '../../components/shared/Card'
import ShowMoney from './components/ShowMoney/ShowMoney'
import { ProfitsSemester } from './components/charts/ProfitsSemester'

interface IDashboardProps {
  children?: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const [sidenav, setSidenav] = useState(false)

  return (
    <>
      {/* <div className='grid sm:grid-cols-3 gap-5 w-full mb-2'>
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
      </div> */}

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
