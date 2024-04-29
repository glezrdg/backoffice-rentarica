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
        position: 'right',
        labels: {
          color: '#495057',
        },
      },
    },
  })

  const pieData = {
    labels: props.provinces
      ?.filter((i: any) => i.qty > 0)
      .map((i: any) => i.province || i.name),
    datasets: [
      {
        data: props.provinces?.map((i: any) => i.qty),
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
        style={{ width: '500px' }}
      />
    </div>
  )
})

export default ProvinceChart
