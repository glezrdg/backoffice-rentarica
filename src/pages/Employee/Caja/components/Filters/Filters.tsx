import React, { useState, useEffect } from 'react'
import './styles.css'

// Components
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'

interface IFiltersProps {
  children?: React.ReactNode
}

const Filters: React.FC<IFiltersProps> = (props) => {
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedAmount, setSelectedAmount] = useState('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState([])

  const prices = [
    { name: 'Mayores', value: 'desc' },
    { name: 'Menores', value: 'asc' },
  ]

  const states = [
    { name: 'Enviados', value: 't' },
    { name: 'Pendientes', value: 'f' },
  ]

  return (
    <>
      <div className='items-center hidden lg:flex'>
        <div className='flex items-center self-end mr-2 rounded-2xl h-fit w-1/4 xl:mr-20'>
          <span className='p-input-icon-left w-full'>
            <i className=' fa fa-search' />

            <InputText
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Buscar por nombre o codigo...'
              className='rounded-lg placeholder:text-xs outline-none p-2 w-full min-w-[200px]'
            />
          </span>
        </div>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Monto</label>
          <Dropdown
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.value)}
            options={prices}
            optionLabel='name'
            optionValue='value'
            placeholder='Monto'
            className='w-full md:w-14rem text-xs'
          />
        </div>
        <div className='flex flex-col mr-3'>
          <label className='text-xs mb-1'>Estado</label>
          <Dropdown
            value={selectedState}
            onChange={(e) => setSelectedState(e.value)}
            options={states}
            optionLabel='name'
            optionValue='value'
            placeholder='Monto'
            className='w-full md:w-14rem text-xs'
          />
        </div>
      </div>
    </>
  )
}

export default Filters
