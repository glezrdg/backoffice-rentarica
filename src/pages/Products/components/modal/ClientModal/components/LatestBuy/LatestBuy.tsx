import React from 'react'
import { BarChart } from '../../../../../../../components/charts'
import { Card } from '../../../../../../../components/shared'
import './styles.css'

interface ILatestBuyProps {
  children?: React.ReactNode
}

const LatestBuy: React.FC<ILatestBuyProps> = (props) => {
  return (
    <>
      <div className='rounded-xl'>
        <Card
          title='Venta semanal'
          className='!bg-slate-50 shadow-md mr-4 w-full'
          bodyClassName='p-2'
        >
          <BarChart color='purple' title='' />
        </Card>

        <Card
          title='Venta semanal'
          className='!bg-slate-50 shadow-md'
          bodyClassName='p-2'
        >
          <BarChart color='purple' title='' />
        </Card>
      </div>
    </>
  )
}

export default LatestBuy
