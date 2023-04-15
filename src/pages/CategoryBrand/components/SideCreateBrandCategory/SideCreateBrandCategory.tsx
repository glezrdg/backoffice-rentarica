import React from 'react'

import './styles.css'

// Components
import BrandForm from './components/BrandForm'
import CategoryForm from './components/CategoryForm'

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
    <div
      className={`fixed  overflow-y-auto top-0 z-[2000] w-[100vw] lg:w-[40%] h-[100vh] bg-slate-100 shadow-md px-6 transition-all duration-300 ${
        active ? 'right-0' : '-right-full'
      }`}
    >
      {/* Header */}

      <div className='py-6 relative flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>
          Agregar {type === 'brand' ? 'Marca' : 'Categoria'}
        </h3>
        <i
          className='fa fa-regular fa-rectangle-xmark cursor-pointer text-xl transition-all hover:text-purple-500 hover:scale-105'
          onClick={close}
        />
      </div>

      {type === 'brand' ? (
        <BrandForm close={close} />
      ) : (
        <CategoryForm close={close} />
      )}
    </div>
  )
}

export default SideCreateBrandCategory
