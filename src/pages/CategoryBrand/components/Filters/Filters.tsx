import React, { useState } from 'react'
import './styles.css'

// Components
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'

interface IFiltersProps {
  children?: React.ReactNode
}

const Filters: React.FC<IFiltersProps> = (props) => {
  const [selectedCities, setSelectedCities] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]

  return (
    <>
      <div className='items-center hidden lg:flex'>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Provincias</label>
          <MultiSelect
            value={selectedCities}
            onChange={(e) => setSelectedCities(e.value)}
            options={cities}
            optionLabel='name'
            display='chip'
            placeholder='Provincias'
            maxSelectedLabels={3}
            className='w-full max-w-[250px] text-xs md:w-20rem'
          />
        </div>
      </div>
    </>
  )
}

export default Filters
