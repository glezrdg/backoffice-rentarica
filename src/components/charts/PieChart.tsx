import { Chart } from 'primereact/chart'
import { memo, useState } from 'react'
import { useOrderState } from '../../pages/Orders/context'
import { IOrder } from '../../pages/Orders/models/IOrder'

const getProvincesQty = (orders: IOrder[]) => {
  let provinces = new Set<string>()

  let choosenProvinces = Array.from(provinces)
  let data = []

  for (let index = 0; index < choosenProvinces.length; index++) {
    const search = choosenProvinces[index]
    let item = {
      province: search,
      qty: 0,
    }

    data.push(item)
  }
  console.log('Province Data', data)
  return data
}

const ProvinceChart = memo(function ProvinceChart(props: any) {
  const { orders } = useOrderState()
  console.log('props', props)

  const [pieOptions, setPieOptions] = useState<any>({
    maintainAspectRatio: false,
    aspectRatio: props.aspectRatio || 1,
    animation: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#495057',
        },
      },
    },
  })

  const pieData = {
    labels: ['Nuevos Pacientes'],
    datasets: [
      {
        data: [12],
        backgroundColor: ['#EBF5FF'],
        border: ['rgb(107,111,243'],
      },
    ],
  }

  return (
    <div className='flex flex-column align-items-center'>
      <Chart
        type='pie'
        data={pieData}
        options={pieOptions}
        style={{ width: '500px' }}
      />
    </div>
  )
})

export default ProvinceChart
