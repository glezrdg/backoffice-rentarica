import React, { useState } from 'react'
import './styles.css'

// Components
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared/'
import { CategoryWrapper, Header, SideCreateBrandCategory } from './components'
import BrandWrapper from './components/BrandWrapper/BrandWrapper'
import { CategoryBrandProvider } from './context'

interface ICategoryBrandProps {
  children?: React.ReactNode
}

const CategoryBrand: React.FC<ICategoryBrandProps> = (props) => {
  const [sideCreate, setSideCreate] = useState(false)
  const [type, setType] = useState('')

  const handleSide = (type: string) => {
    setSideCreate(true)
    setType(type)
  }

  return (
    <CategoryBrandProvider>
      <>
        <SideCreateBrandCategory
          active={sideCreate}
          close={() => setSideCreate(false)}
          type={type}
        />
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
                onClick={() => handleSide('brand')}
              />
              <Button
                icon='fa fa-plus'
                color='warning'
                text='Categorias'
                className='!px-3 !hover:shadow-none'
                onClick={() => handleSide('category')}
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
    </CategoryBrandProvider>
  )
}

export default CategoryBrand
