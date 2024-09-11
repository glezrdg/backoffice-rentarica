import React, { memo, useEffect } from 'react'
import { Chart } from 'primereact/chart'

import { barChartData, Colors, getColor } from '../../utility/data'
import { useReportState } from '../../pages/Reports/context'
import { monthString } from '../../utility/monthString'

export interface BarChartProps {
  color: Colors
  title: string
}

export const BarChart: React.FC<BarChartProps> = memo(function BarVertical({
  color,
  title,
}) {
  const { reports } = useReportState()
  let data: any = {}

  const handleGetDataDependOnTitle = () => {
    if (title === 'Ordenes') {
      return reports?.map((report) => report?.sellsReport?.ordersQty)
    }
    if (title === 'Numero de inversiones') {
      return reports?.map((report) => report?.shoppingReport?.shoppingQty)
    }
    if (title === 'Nuevos Usuarios') {
      return reports?.map((report) => report?.clientsQty)
    }
    if (title === 'Ganancias') {
      return reports?.map((report) => report?.sellsReport?.totalAmonutWin)
    }
  }

  useEffect(() => {
    if (reports?.length) {
      ;(data.labels = reports.map((i) => monthString(i.month))),
        (data.datasets = [
          {
            label: title,
            data: handleGetDataDependOnTitle(),
            fill: true,
            borderColor: getColor(color),
            backgroundColor: getColor(color),
            tension: 0.4,
          },
        ])
    }
  }, [reports])

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#000',
          },
          grid: {
            color: 'transparent',
          },
        },
        y: {
          display: false,
        },
      },
    }

    return {
      basicOptions,
    }
  }

  const { basicOptions } = getLightTheme()
  return (
    <div className='w-full'>
      <Chart
        type='bar'
        data={data}
        options={basicOptions}
        className='w-[100%] h-[180px] aspect-auto '
      />
    </div>
  )
})
