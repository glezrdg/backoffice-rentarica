import React, { useState } from 'react'
import './styles.css'

// Components
import { InputText } from 'primereact/inputtext'

interface IHeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = (props) => {
  const [mobileFilter, setMobileFilter] = useState(false)

  return (
    <>
      <div className='flex items-center relative'>
        <div className='flex items-center self-end mr-2 rounded-2xl h-fit w-fit xl:mr-20 flex-1'>
          <span className='p-input-icon-left w-full'>
            <i className=' fa fa-search' />

            <InputText
              placeholder='Buscar por nombre o codigo...'
              className='rounded-lg placeholder:text-xs outline-none p-2 w-full min-w-[200px]'
            />
          </span>
        </div>

        <button
          className='ml-3 cursor-pointer lg:hidden bg-white rounded-lg p-3 hover:text-purple-500 transition'
          onClick={() => setMobileFilter(!mobileFilter)}
        >
          <i className='fa fa-filter' />
        </button>
      </div>
    </>
  )
}

export default Header
