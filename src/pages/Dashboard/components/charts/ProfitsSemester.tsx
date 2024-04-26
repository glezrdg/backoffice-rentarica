import React, { memo, useEffect } from 'react'
import { Chart } from 'primereact/chart'

import { barChartData, Colors, getColor } from '../../../../utility/data'
import { useReportState } from '../../../../pages/Reports/context'
import { monthString } from '../../../../utility/monthString'

export interface ProfitsSemesterProps {
  color: Colors
}

export const ProfitsSemester: React.FC<ProfitsSemesterProps> = memo(
  function BarVertical({ color }) {
    const { reports } = useReportState()
    let data: any = {}

    useEffect(() => {
      if (reports?.length) {
        ;(data.labels = reports.map((i) => monthString(i.month))),
          (data.datasets = [
            {
              label: 'Ganancias',
              data: reports?.map(
                (report) => report?.sellsReport?.totalAmonutSell
              ),
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
  }
)
