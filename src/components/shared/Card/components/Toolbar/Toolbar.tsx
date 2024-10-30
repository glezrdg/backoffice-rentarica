import React, { useState } from 'react'
import './styles.css'
import { Dropdown } from 'primereact/dropdown'

interface IToolbarProps {
  children?: React.ReactNode
}

const Toolbar: React.FC<IToolbarProps> = (props) => {
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
      {/* Toolbar */}
      <ul className=' hidden sm:flex flex-wrap h-full text-xs sm:text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400'>
        <li className='mr-2'>
          <a
            aria-current='page'
            className='grid place-items-center px-4 h-full text-white bg-blue-900 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
          >
            week
          </a>
        </li>
        <li className='mr-2'>
          <a className='grid place-items-center px-4 h-full rounded-t-lg hover:text-blue-500 hover:border-b-2 border-b-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-300'>
            month
          </a>
        </li>
        <li className='mr-2'>
          <a className='grid place-items-center px-4 h-full rounded-t-lg hover:text-blue-500 hover:border-b-2 border-b-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-300'>
            year
          </a>
        </li>
      </ul>

      <div className='sm:hidden'>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel='name'
          placeholder='Monto'
          className='h-10 px-2 !py-0 mydropy'
        />
      </div>
    </>
  )
}

export default Toolbar
