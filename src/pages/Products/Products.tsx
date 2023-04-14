import React, { useState } from 'react'
import './styles.css'

// Utility

// Components
import { PageHeader } from '../../components/layout'
import { Button } from '../../components/shared'
import { Header, SideCreateProduct } from './components'
import ProductTable from './components/tables/ProductTable'

interface IProductsProps {
  children?: React.ReactNode
}

const Products: React.FC<IProductsProps> = (props) => {
  const [createProduct, setCreateProduct] = useState(false)

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
              color='success'
              text='Producto'
              className='!px-3 !hover:shadow-none'
              onClick={() => setCreateProduct(true)}
            />
          </div>
        }
      />

      <Header />

      {/* TABLE */}
      <ProductTable />
    </>
  )
}

export default Products
