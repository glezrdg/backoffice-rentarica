import React, { useEffect } from 'react'

import './styles.css'

// Components
import { CompanyForm } from './components/forms'
import { IShopping } from '../../models'
import { useShoppingState } from '../../context'

import { fetchProducts } from '../../../../redux/reducers/products'
import { useAppDispatch } from '../../../../redux/store'
import { Sidebar } from 'primereact/sidebar'

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
    <Sidebar
      visible={active}
      onHide={close}
      position='right'
      className={`md:!w-[70vw] lg:!w-[40vw]`}
    >
      {/* Header */}

      <div className='py-6 relative flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>Agregar Compra</h3>
        {/*ADDED PRODUCTS*/}
      </div>

      {/* FORM */}
      <CompanyForm
        onClose={() => {
          setShopping({} as IShopping)
          close()
        }}
      />
    </Sidebar>
  )
}

export default SideCreateShopping
