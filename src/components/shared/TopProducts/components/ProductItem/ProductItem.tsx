import React from 'react'
import './styles.css'
import { IProduct } from 'src/pages/Products/models/IProduct'
import commaNumber from 'comma-number'

interface IProductItemProps {
  children?: React.ReactNode
  qty: number
  amount: number
  product: IProduct
}

const ProductItem: React.FC<IProductItemProps> = (props) => {
  console.log(props)
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center mb-4'>
          <img
            src={`http://localhost:3000/${props?.product?.images[0]}`}
            alt='product'
            className=' w-14 h-14 md:w-20 md:h-20  object-cover mr-2 md:mr-5 rounded-lg'
          />
          <div>
            <h4 className='mb-3 text-slate-600 text-xs sm:text-sm'>
              {props.product?.name}
            </h4>
            <p className='text-xs sm:text-sm text-slate-400'>
              {props?.qty} ventas
            </p>
          </div>
        </div>

        <h4 className='text-green-500 text-xl sm:text-2xl md:text-3xl'>
          ${commaNumber(props?.amount)}
        </h4>
      </div>
    </>
  )
}

export default ProductItem
