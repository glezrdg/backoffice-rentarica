import React, { useState, memo, useEffect } from 'react'
import { Chart } from 'primereact/chart'
import { IOrder } from '../../pages/Orders/models/IOrder'
import { useOrderState } from '../../pages/Orders/context'

const getProvincesQty = (orders: IOrder[]) => {
  let provinces = new Set<string>()

  orders.map((order) => provinces.add(order.shippingAddress.province))

  let choosenProvinces = Array.from(provinces)
  let data = []

  for (let index = 0; index < choosenProvinces.length; index++) {
    const search = choosenProvinces[index]
    let item = {
      province: search,
      qty: 0,
    }

    let searched = orders.filter((o) => o.shippingAddress.province === search)

    item.qty = searched.reduce(
      (acc, curr) =>
        curr.orderItems.reduce((acc, curr) => curr.qty + acc, 0) + acc,
      0
    )

    data.push(item)
  }
  console.log(data)
  return data
}

const PieChart = memo(function PieChart(props: any) {
  const { orders } = useOrderState()
  const [data, setData] = useState<{ province: string; qty: number }[]>([])
  console.log(orders)

  useEffect(() => {
    setData(getProvincesQty(orders))
  }, [])

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
    labels: data.map((i) => i.province),
    datasets: [
      {
        data: data.map((i) => i.qty),
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
