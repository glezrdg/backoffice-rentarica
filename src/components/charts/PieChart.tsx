import React, { useState, memo } from 'react'
import { Chart } from 'primereact/chart'

const PieChart = memo(function PieChart(props: any) {
  const [pieOptions, setPieOptions] = useState<any>({
    maintainAspectRatio: false,
    aspectRatio: props.aspectRatio || 1.12,
    animation: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#495057',
        },
      },
    },
  })

  const pieData = {
    labels: [
      'Santo domingo',
      'San francisco',
      'Santiago',
      'La vega',
      'Dajabon',
      'Jarabacoa',
    ],
    datasets: [
      {
        data: [540, 325, 702, 540, 325, 702],
        backgroundColor: [
          'rgb(107,111,243, 0.6',
          'rgb(32,201,151, 0.6)',
          'rgb(250,139,12, 0.6)',
          'rgb(07,202,22, 0.6',
          'rgb(142,201,151, 0.6)',
          'rgb(111,55,12, 0.6)',
        ],
        border: ['rgb(107,111,243', 'rgb(32,201,151)', 'rgb(250,139,12)'],
      },
    ],
  }

  return (
    <div className='flex flex-column align-items-center'>
      <Chart
        type='pie'
        data={pieData}
        options={pieOptions}
        style={{ width: '100%' }}
      />
    </div>
  )
})

export default PieChart
