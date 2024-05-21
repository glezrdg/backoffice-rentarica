import React from 'react'
import { BarChart } from '../../../../components/charts'
import './styles.css'
import { useReportState } from '../../../../pages/Reports/context'
import commaNumber from 'comma-number'

interface IWidgetCardProps {
  children?: React.ReactNode
  title: string
  color: 'purple' | 'red' | 'blue' | 'green'
}

const WidgetCard: React.FC<IWidgetCardProps> = (props) => {
  const { report } = useReportState()

  console.log('COLOR', props.color)

  const info: any = {
    value: 0,
  }

  if (props.title === 'Ordenes') {
    info.value = report?.sellsReport?.ordersQty || 0
  }
  if (props.title === 'Compras') {
    info.value = report?.shoppingReport?.shoppingQty || 0
  }

  if (props.title === 'Ganancias') {
    info.value = report?.sellsReport?.totalAmonutWin || 0
  }

  if (props.title === 'Nuevos Usuarios') {
    info.value = report?.clientsQty || 0
  }

  return (
    <div className='bg-white dark:bg-slate-900 rounded-lg shadow-sm w-full h-52 flex justify-between p-[25PX]'>
      <div className=' self-end w-1/2'>
        <h5 className='text-slate-800 text-3xl md:text-3xl lg:text-2xl xl:text-4xl mb-2 dark:text-slate-200'>
          {commaNumber(info.value)}
        </h5>
        <p className='text-slate-400 mb-5'>{props.title}</p>

        <p className='text-sm lg:text-sm xl:text-sm'>
          <span className='text-green-600 font-medium'>25%</span> Since last
          week
        </p>
      </div>
      <div className='w-1/2 self-center'>
        <BarChart color={props.color} />
      </div>
    </div>
  )
}

export default WidgetCard
