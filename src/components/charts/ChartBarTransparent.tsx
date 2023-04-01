import React, { memo } from 'react'
import { Chart } from 'primereact/chart'

import { barChartData, Colors } from '../../utility/data'

export interface BarChartProps {
  color: Colors
}

export const BarChart: React.FC<BarChartProps> = memo(function BarVertical({
  color,
}) {
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
        data={barChartData(color)}
        options={basicOptions}
        className='w-[100%] h-[180px] aspect-auto '
      />
    </div>
  )
})
