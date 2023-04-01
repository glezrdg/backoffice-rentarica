import React, { useState, memo } from 'react'
import { Chart } from 'primereact/chart'

const long = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '',
      data: [66000, 52000, 8043, 81435, 56220, 12465, 40212],
      fill: true,
      backgroundColor: 'rgb(144,97,249, 0.3)',
      borderColor: 'rgb(144,97,249, 0.4)',
      tension: 0.4,
    },
    {
      label: '',
      data: [28245, 48012, 40015, 19756, 86756, 27146, 90457],
      fill: true,
      borderColor: 'rgb(200,209,221, 0.8)',
      backgroundColor: 'rgb(200,209,221, 0.4)',
      tension: 0.4,
    },
  ],
}

const short = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Ordenes',
      data: [66000, 52000, 8043],
      fill: '#000',
      borderColor: '#6184AA',
      tension: 0.4,
    },
    {
      label: 'Ganancias',
      data: [28000, 4820, 48200],
      backgroundColor: '#FDD87D',
      borderColor: '#FDD87D',
      fill: true,
      tension: 0.4,
      radius: 0,
    },

    {
      label: '',
      data: [10000, 8200, 40200],
      fill: '#000',
      borderColor: '#90CD93',
      tension: 0.4,
    },
  ],
}

const LineChart = memo(function LineChart(props: any) {
  const [basicData] = useState(props.short ? short : long)

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: props.aspectRatio || 0.8,
      animation: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#06060',
          },
          grid: {
            color: 'transparent',
          },
        },
        y: {
          grid: {
            color: 'transparent',
          },
        },
      },
    }

    return {
      basicOptions,
    }
  }

  const { basicOptions } = getLightTheme()
  return <Chart type='line' data={basicData} options={basicOptions} />
})

export default LineChart
