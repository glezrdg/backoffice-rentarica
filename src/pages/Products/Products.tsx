import React, { useState } from 'react'
import './styles.css'

// Utility

// Components
import { PageHeader } from '../../components/layout'
import { Button, Card, TopProducts } from '../../components/shared'
import { Header, SideCreateProduct } from './components'
import { InventoryProvider } from './context'
import LowestProducts from './components/LowestProducts'
import ProductTable from './components/tables/ProductTable'

interface IProductsProps {
  children?: React.ReactNode
}

const Products: React.FC<IProductsProps> = (props) => {
  const [createProduct, setCreateProduct] = useState(false)
  const [productModal, setProductModal] = useState(false)

  return (
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
      <Card title='Productos' bodyClassName='mt-4'>
        <ProductTable openCreate={() => setCreateProduct(true)} />
      </Card>

      {/* INFO */}

      <div className='grid grid-cols-2 gap-6 mt-6'>
        <TopProducts />
        <LowestProducts products={[]} />
      </div>
    </>
  )
}

export default Products
