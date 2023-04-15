import React from 'react'

import './styles.css'

// Components
import ProductForm from './components/ProductForm'
import { useInventoryState } from '../../context'
import { IProduct } from '../../models/IProduct'

interface ISideCreateProductProps {
  children?: React.ReactNode
  active: boolean
  close: () => void
}

const SideCreateProduct: React.FC<ISideCreateProductProps> = ({
  active,
  close,
}) => {
  const { product, setProduct } = useInventoryState()

  return (
    <div
      className={`fixed  overflow-y-auto top-0 z-[2000] w-[40%] h-[100vh] bg-slate-100 shadow-md px-6 transition-all duration-300 ${
        active ? 'right-0' : '-right-full'
      }`}
    >
      {/* Header */}

      <div className='py-6 relative flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>
          {product ? 'Actualizar' : 'Añadir'} producto
        </h3>
        <i
          className='fa fa-regular fa-rectangle-xmark cursor-pointer text-xl transition-all hover:text-purple-500 hover:scale-105'
          onClick={() => {
            setProduct({} as IProduct)
            close()
          }}
        />
        {/*ADDED PRODUCTS*/}
      </div>

      {/* FORM */}
      <ProductForm
        close={() => {
          setProduct({} as IProduct)
          close()
        }}
      />
    </div>
  )
}

export default SideCreateProduct
