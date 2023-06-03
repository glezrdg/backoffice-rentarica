import React, { useEffect, useState } from 'react'
import './styles.css'

// Components
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { useCategoryBrandState } from '../../../CategoryBrand/context'
import { useInventoryState } from '../../context'

interface IFiltersProps {
  children?: React.ReactNode
}

const Filters: React.FC<IFiltersProps> = (props) => {
  const { brands, categories } = useCategoryBrandState()
  const { getProducts } = useInventoryState()

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')

  return (
    <>
      <div className='items-center hidden lg:flex'>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Categorias</label>
          <MultiSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
            options={categories}
            optionLabel='name'
            optionValue='_id'
            display='chip'
            placeholder='Categorias'
            maxSelectedLabels={3}
            className='w-full max-w-[150px] text-xs md:w-20rem'
          />
        </div>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Marcas</label>
          <Dropdown
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.value)}
            options={brands}
            optionLabel='name'
            optionValue='_id'
            placeholder='Monto'
            className='w-full md:w-14rem text-xs'
          />
        </div>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Precio</label>
          <MultiSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
            options={categories}
            optionLabel='name'
            display='chip'
            placeholder='Estado'
            maxSelectedLabels={3}
            className='w-full max-w-[150px] text-xs md:w-20rem'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs mb-1'>Sizes</label>
          <MultiSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
            options={brands}
            optionLabel='name'
            display='chip'
            placeholder='Metodo de pago'
            maxSelectedLabels={3}
            className='w-full max-w-[150px] text-xs md:w-20rem'
          />
        </div>
      </div>
    </>
  )
}

export default Filters
