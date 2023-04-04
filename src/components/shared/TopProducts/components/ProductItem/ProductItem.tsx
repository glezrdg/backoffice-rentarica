import React from 'react'
import './styles.css'

interface IProductItemProps {
  children?: React.ReactNode
}

const ProductItem: React.FC<IProductItemProps> = (props) => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center mb-4'>
          <img
            src='https://assets.adidas.com/images/w_450,f_auto,q_auto/1afa15b3c76f4b8a80e5ae7a00c4de04_9366/HL9407_01_laydown.jpg'
            alt='product'
            className=' w-14 h-14 md:w-20 md:h-20  object-cover mr-2 md:mr-5 rounded-lg'
          />
          <div>
            <h4 className='mb-3 text-slate-600 text-xs sm:text-sm'>
              Camisa adidas
            </h4>
            <p className='text-xs sm:text-sm text-slate-400'>357 ventas</p>
          </div>
        </div>

        <h4 className='text-green-500 text-xl sm:text-2xl md:text-3xl'>
          $16,560
        </h4>
      </div>
    </>
  )
}

export default ProductItem
