import { Card, ProductItem } from '../../../components/shared'
import React, { useEffect, useState } from 'react'
import { IProduct } from '../models/IProduct'
import { getLowestProducts } from '../services'

const LowestProducts = ({ products }: { products: IProduct[] }) => {
  const [data, setData] = useState<IProduct[]>([])

  useEffect(() => {
    handleGetLowestQtyProducts()
  }, [])

  const handleGetLowestQtyProducts = async () => {
    try {
      const products = await getLowestProducts()
      console.log('LOWEST PRODUCTS: ', products)
      setData(products)
    } catch (error: any) {
      console.error('ERROR GETTING LOWEST: ', error.message)
    }
  }

  return (
    <Card title='Productos agotados'>
      {data?.map((e: any, i: number) => (
        <div className='flex-1' key={i}>
          <ProductItem {...e} amount={e.qty} forQty />
        </div>
      ))}
    </Card>
  )
}

export default LowestProducts
