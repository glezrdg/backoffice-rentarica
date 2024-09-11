import React from 'react'
import { Sidebar } from 'primereact/sidebar'

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
    <Sidebar
      visible={active}
      onHide={close}
      position='right'
      className={`md:!w-[70vw] lg:!w-[40vw]`}
    >
      {/* Header */}

      <div className='py-6 flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>
          {product ? 'Actualizar' : 'Añadir'} producto
        </h3>
        {/*ADDED PRODUCTS*/}
      </div>

      {/* FORM */}
      <ProductForm
        close={() => {
          setProduct({} as IProduct)
          close()
        }}
      />
    </Sidebar>
  )
}

export default SideCreateProduct
