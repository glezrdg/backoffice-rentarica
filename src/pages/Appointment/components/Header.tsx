import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { useAppointmentState } from '../context'

interface IHeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { setSearch } = useAppointmentState()
  const [mobileFilter, setMobileFilter] = useState(false)

  return (
    <>
      <div className='flex items-center relative'>
        <div className='flex items-center self-end  rounded-2xl h-fit w-fit flex-1'>
          <span className='p-input-icon-left w-full'>
            <i className=' fa fa-search' />

            <InputText
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Buscar por nombre...'
              className='rounded-lg placeholder:text-xs outline-none p-2 w-full dark:bg-transparent'
            />
          </span>
        </div>

        <button
          className='ml-3 cursor-pointer lg:hidden bg-white rounded-lg p-3 hover:text-blue-500 transition'
          onClick={() => setMobileFilter(!mobileFilter)}
        >
          <i className='fa fa-filter' />
        </button>

        {/* MOBILE FILTER */}
        {/* <MobileFilter visible={mobileFilter} /> */}
      </div>
    </>
  )
}

export default Header
