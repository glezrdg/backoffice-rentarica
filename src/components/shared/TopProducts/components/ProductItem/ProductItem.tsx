import React from 'react'
import './styles.css'
import { IProduct } from 'src/pages/Products/models/IProduct'
import commaNumber from 'comma-number'

interface IProductItemProps {
  children?: React.ReactNode
  qty: number
  amount: number
  forQty: boolean
  name: string
  product: IProduct
  images: string[]
}

const ProductItem: React.FC<IProductItemProps> = (props) => {
  console.log(props)
  return (
    <>
      <div className='flex items-center justify-between my-4'>
        <div className='flex items-center '>
          <img
            src={`http://localhost:3000/${
              props?.product?.images[0] || props.images[0]
            }`}
            alt='product'
            className=' w-14 h-14 md:w-20 md:h-20  object-cover mr-2 md:mr-5 rounded-lg'
          />
          <div>
            <h4
              className={`${
                !props.forQty ? 'mb-3' : '!text-xl mb-0'
              } text-slate-600 text-xs sm:text-sm dark:text-slate-200`}
            >
              {props.product?.name || props.name}
            </h4>
            {!props.forQty && (
              <p className='text-xs sm:text-sm text-slate-400'>
                {props?.qty} ventas
              </p>
            )}
          </div>
        </div>

        <h4
          className={`text-${
            !props.forQty ? 'green' : 'red'
          }-500 text-xl sm:text-2xl`}
        >
          {!props.forQty && '$'}
          {commaNumber(props?.amount)}
        </h4>
      </div>
    </>
  )
}

export default ProductItem
