import React, { useState, useEffect } from 'react'
import './styles.css'
import { Card } from '../Card'
import ProductItem from './components/ProductItem/ProductItem'
import { IOrder } from 'src/pages/Orders/models/IOrder'
import { IProduct } from 'src/pages/Products/models/IProduct'

interface ITopProductsProps {
  children?: React.ReactNode
  orders?: IOrder[]
  value?: [{ product: IProduct; qty: number }]
  className?: string
}

const TopProducts: React.FC<ITopProductsProps> = ({
  orders,
  value,
  className = '',
}) => {
  const [data, setData] = useState<any>()

  const getProductsInfo = () => {
    let products = new Set<any>()

    orders?.map((order) =>
      order.orderItems.map((i) =>
        !products.has(JSON.stringify(i.product))
          ? products.add(JSON.stringify(i.product))
          : ''
      )
    )
    let choosenProducts = Array.from(products)

    console.log('PRODUCTYSS', products)
    let data = []

    for (let index = 0; index < choosenProducts.length; index++) {
      console.log('choosen product', choosenProducts[1])
      const search = JSON.parse(choosenProducts[index])

      let item: any = {
        product: search,
      }

      item.qty = orders?.reduce(
        (acc, curr) =>
          acc +
          curr.orderItems
            .filter((orderItem) => orderItem.product.name === search.name)
            .reduce((ac, cu) => ac + cu.qty, 0),
        0
      )

      item.amount = orders?.reduce(
        (acc, curr) =>
          acc +
          curr.orderItems
            .filter((orderItem) => orderItem.product.name === search.name)
            .reduce((ac, cu) => ac + cu.qty * cu.product.price, 0),
        0
      )

      data.push(item)
    }

    setData(data)
    console.log('DATA', data)
  }

  useEffect(() => {
    if (orders) {
      getProductsInfo()
    }

    if (value) {
      setData(
        value.map((i) => ({
          product: i.product,
          qty: i.qty,
          amount: i.product?.price * i.qty,
        }))
      )
    }
  }, [orders, value])

  return (
    <>
      {/* TOP SELLER */}
      <Card
        title='Top vendidos'
        className={`h-full ${className}`}
        bodyClassName='flex flex-column flex-1'
      >
        {data?.map((e: any, i: number) => (
          <div className='flex-1' key={i}>
            <ProductItem {...e} />
          </div>
        ))}
      </Card>
    </>
  )
}

export default TopProducts
