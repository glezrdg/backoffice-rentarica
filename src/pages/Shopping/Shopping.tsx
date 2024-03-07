import React, { useState } from 'react'
import { PageHeader } from '../../components/layout'
import { Button } from '../../components/shared'
import ShoppingCard from './components/ShoppingCard'
import SideCreateShopping from './components/SideCreateOfert/SideCreate'
import { useShoppingState } from './context'
import ShoppingModal from './components/ShoppingModal'

export interface ShoppingProps {}

const Shopping = ({}: ShoppingProps) => {
  const { shoppings } = useShoppingState()
  const [createShopping, setCreateShopping] = useState(false)

  return (
    <>
      <>
        <SideCreateShopping
          active={createShopping}
          close={() => setCreateShopping(false)}
        />
        {/* Header */}
        <PageHeader
          title='Compras'
          right={
            <div>
              <Button
                icon='fa fa-plus'
                color='success'
                text='Registrar Compra'
                className='!px-3 !hover:shadow-none'
                onClick={() => setCreateShopping(true)}
              />
            </div>
          }
        />

        {/* <Header /> */}

        {/* TABLE */}
        {/* <ProductTable openCreate={() => setCreateProduct(true)} /> */}
        <div className='grid grid-cols-3 gap-4'>
          {shoppings.map((shop) => (
            <ShoppingCard shopping={shop} />
          ))}
        </div>

        <ShoppingModal />
      </>
    </>
  )
}

export default Shopping
