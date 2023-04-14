import React, { useState } from 'react'
import './styles.css'

// Components
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared/'
import { CategoryWrapper, Header } from './components'
import BrandWrapper from './components/BrandWrapper/BrandWrapper'

interface ICategoryBrandProps {
  children?: React.ReactNode
}

const CategoryBrand: React.FC<ICategoryBrandProps> = (props) => {
  return (
    <>
      {/* Header */}
      <PageHeader
        title='Marcas y categorias'
        right={
          <div className='flex'>
            <Button
              icon='fa fa-plus'
              color='success'
              text='Marcas'
              className='!px-3 !hover:shadow-none mr-2'
              // onClick={() => setCreateCategoryBrand(true)}
            />
            <Button
              icon='fa fa-plus'
              color='warning'
              text='Categorias'
              className='!px-3 !hover:shadow-none'
              // onClick={() => setCreateCategoryBrand(true)}
            />
          </div>
        }
      />

      <Header />

      <div className='grid sm:grid-cols-[2fr_1fr] gap-5'>
        <Card title='Categorias' bodyClassName='p-4' eye>
          <CategoryWrapper />
        </Card>
        <Card title='Marcas' className='h-full' eye>
          <BrandWrapper />
        </Card>
      </div>
    </>
  )
}

export default CategoryBrand
