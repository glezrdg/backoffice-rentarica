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
                text='Marcas'
                className='!px-3 !hover:shadow-none mr-2 !bg-white !text-purple-900'
                onClick={() => handleSide('brand')}
              />
              <Button
                icon='fa fa-plus'
                color='warning'
                text='Categorias'
                className='!px-3 !hover:shadow-none !bg-purple-900'
                onClick={() => handleSide('category')}
              />
            </div>
          }
        />

        <Card title='' className='mb-6'>
          <Header />
        </Card>

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
