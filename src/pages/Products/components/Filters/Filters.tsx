import React, { useEffect, useState } from 'react'
import './styles.css'

// Components
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { useCategoryBrandState } from '../../../CategoryBrand/context'
import { useInventoryState } from '../../context'
import { sizes } from '../../utils/data'

interface IFiltersProps {
  children?: React.ReactNode
}

const Filters: React.FC<IFiltersProps> = (props) => {
  const { brands, categories } = useCategoryBrandState()
  const { getProducts } = useInventoryState()

  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedSizes, setSelectedSizes] = useState([])

  const prices = [
    { name: 'Mayores', value: 'asc' },
    { name: 'Menores', value: 'desc' },
  ]

  useEffect(() => {
    let query: any = {}

    if (selectedCategory.length) query.categories = selectedCategory.join(',')
    if (selectedBrand.length) query.brand = selectedBrand.join(',')
    if (selectedSizes.length) query.sizes = selectedSizes.join(',')
    if (selectedPrice) query.price = selectedPrice

    handleGetProducts(query)
  }, [selectedCategory, selectedBrand, selectedPrice, selectedSizes])

  const handleGetProducts: any = async (query: any) => {
    try {
      await getProducts(query)
    } catch (error: any) {
      console.log('FETCH FROM FILTERS:', error.message)
    }
  }

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
            className='w-full max-w-[150px] text-xs md:w-20rem dark:bg-transparent'
          />
        </div>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Marcas</label>
          <MultiSelect
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.value)}
            options={brands}
            optionLabel='name'
            optionValue='_id'
            display='chip'
            placeholder='Marcas'
            maxSelectedLabels={3}
            className='w-full max-w-[150px] text-xs md:w-20rem dark:bg-transparent'
          />
        </div>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Precio</label>
          <Dropdown
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.value)}
            options={prices}
            optionLabel='name'
            optionValue='value'
            placeholder='Orden'
            className='w-full md:w-14rem text-xs dark:bg-transparent'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-xs mb-1'>Sizes</label>
          <MultiSelect
            value={selectedSizes}
            onChange={(e) => setSelectedSizes(e.value)}
            options={sizes}
            optionLabel='name'
            optionValue='name'
            display='chip'
            placeholder='Metodo de pago'
            maxSelectedLabels={3}
            className='w-full max-w-[150px] text-xs md:w-20rem dark:bg-transparent'
          />
        </div>
      </div>
    </>
  )
}

export default Filters
