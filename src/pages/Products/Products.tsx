import React, { useState } from 'react'
import './styles.css'

// Utility

// Components
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared'
import { Header, SideCreateProduct } from './components'
import ProductTable from './components/tables/ProductTable'
import { InventoryProvider } from './context'

interface IProductsProps {
  children?: React.ReactNode
}

const Products: React.FC<IProductsProps> = (props) => {
  const [createProduct, setCreateProduct] = useState(false)
  const [productModal, setProductModal] = useState(false)

  return (
    <InventoryProvider>
      <>
        <SideCreateProduct
          active={createProduct}
          close={() => setCreateProduct(false)}
        />
        {/* Header */}
        <PageHeader
          title='Inventario'
          right={
            <div>
              <Button
                icon='fa fa-plus'
                text='Producto'
                className='!px-3 !hover:shadow-none !bg-purple-900'
                onClick={() => setCreateProduct(true)}
              />
            </div>
          }
        />

        <Card title='' className='mb-6'>
          <Header />
        </Card>

        {/* TABLE */}
        <Card title=''>
          <ProductTable openCreate={() => setCreateProduct(true)} />
        </Card>
      </>
    </InventoryProvider>
  )
}

export default Products
