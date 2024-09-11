import React from 'react'

import './styles.css'

// Components
import BrandForm from './components/BrandForm'
import CategoryForm from './components/CategoryForm'
import { Sidebar } from 'primereact/sidebar'

interface ISideCreateBrandCategoryProps {
  children?: React.ReactNode
  active: boolean
  type: string
  close: () => void
}

const SideCreateBrandCategory: React.FC<ISideCreateBrandCategoryProps> = ({
  active,
  close,
  type,
}) => {
  return (
    <Sidebar
      visible={active}
      onHide={close}
      position='right'
      className={`md:!w-[70vw] lg:!w-[40vw]`}
    >
      {/* Header */}

      <div className='py-6 relative flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>
          Agregar {type === 'brand' ? 'Marca' : 'Categoria'}
        </h3>
      </div>

      {type === 'brand' ? (
        <BrandForm close={close} />
      ) : (
        <CategoryForm close={close} />
      )}
    </Sidebar>
  )
}

export default SideCreateBrandCategory
