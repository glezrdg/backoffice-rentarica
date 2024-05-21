import React, { useEffect } from 'react'

import './styles.css'

// Components
import { CompanyForm } from './components/forms'
import { IShopping } from '../../models'
import { useShoppingState } from '../../context'

import { fetchProducts } from '../../../../redux/reducers/products'
import { useAppDispatch } from '../../../../redux/store'
import CreateProductModal from '../../../Products/components/modal/CreateProductModal'

interface ISideCreateShoppingProps {
  children?: React.ReactNode
  active: boolean
  close: () => void
}

const SideCreateShopping: React.FC<ISideCreateShoppingProps> = ({
  active,
  close,
}) => {
  const dispatch = useAppDispatch()
  const { shopping, setShopping } = useShoppingState()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <div
        className={`fixed  overflow-y-auto top-0 z-[1000] w-[40%] h-[100vh] bg-slate-100 shadow-md px-6 transition-all duration-300 ${
          active ? 'right-0' : '-right-full'
        }`}
      >
        {/* Header */}

        <div className='py-6 relative flex items-center justify-between text-slate-600'>
          <h3 className='text-xl'>Agregar Compra</h3>
          <i
            className='fa fa-regular fa-rectangle-xmark cursor-pointer text-xl transition-all hover:text-purple-500 hover:scale-105'
            onClick={() => {
              setShopping({} as IShopping)
              close()
            }}
          />
          {/*ADDED PRODUCTS*/}
        </div>

        {/* FORM */}
        <CompanyForm
          onClose={() => {
            setShopping({} as IShopping)
            close()
          }}
        />
      </div>
      <CreateProductModal />
    </>
  )
}

export default SideCreateShopping
