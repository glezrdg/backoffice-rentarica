import React, { useEffect, useState } from 'react'
import { DataService } from '../config/api'
import ProductsCard from './Home/components/ProductsCard'

const Planes = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const products: any = await DataService.get('/listprices')
      setProducts(products.data)
      console.log('products', products.data.data)
    } catch (error: any) {
      console.log('error getting products', error.message)
    }
  }

  return (
    <section className='bg-gradient-to-r from-purple-900 to-indigo-900 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-extrabold text-white sm:text-5xl'>
            Elige tu plan
          </h2>
          <p className='mt-4 text-xl text-purple-200'>
            Da el siguiente paso para la administracion financiera y facturacion
            de tu negocio
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-8'>
        {products?.map((product) => (
          <ProductsCard product={product} stripeDirect />
        ))}
      </div>
    </section>
  )
}

export default Planes
