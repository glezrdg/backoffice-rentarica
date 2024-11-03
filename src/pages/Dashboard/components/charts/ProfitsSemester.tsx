import React, { memo, useEffect } from 'react'
import { Chart } from 'primereact/chart'

import { barChartData, Colors, getColor } from '../../../../utility/data'
import { monthString } from '../../../../utility/monthString'

export interface ProfitsSemesterProps {
  color: Colors
}

export const ProfitsSemester: React.FC<ProfitsSemesterProps> = memo(
  function BarVertical({ color }) {
    const reports: any = []
    let data: any = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
      datasets: [
        {
          label: ['registrados'],
          data: [74, 45, 86, 63],
          fill: true,
          borderColor: getColor('blue'),
          backgroundColor: getColor('blue'),
          tension: 0.4,
        },
      ],
    }

    useEffect(() => {
      if (reports?.length) {
        ;(data.labels = ['']),
          (data.datasets = [
            {
              label: 'Ganancias',
              data: [8],
              fill: true,
              borderColor: getColor('blue'),
              backgroundColor: getColor('blue'),
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
      <div className='w-full h-full flex items-end'>
        <Chart
          type='bar'
          data={data}
          options={basicOptions}
          className='w-[100%] h-[180px] aspect-auto '
        />
      </div>
    )
  }
)
