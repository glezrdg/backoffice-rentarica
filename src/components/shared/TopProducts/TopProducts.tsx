import React from 'react'
import './styles.css'
import { Card } from '../Card'
import ProductItem from './components/ProductItem/ProductItem'

interface ITopProductsProps {
  children?: React.ReactNode
}

const TopProducts: React.FC<ITopProductsProps> = (props) => {
  return (
    <>
      {/* TOP SELLER */}
      <Card
        title='Top vendidos'
        className='mt-8 md:mt-10'
        toolbar
        bodyClassName='py-4'
        footer={
          <button className='w-full bg-purple-100 h-10 md:h-14 text-sm  sm:text-lg hover:bg-slate-50 hover:text-purple-500 transition-all'>
            Ver todos
          </button>
        }
      >
        {Array.from(Array(5)).map((e, i) => (
          <ProductItem />
        ))}
      </Card>
    </>
  )
}

export default TopProducts
