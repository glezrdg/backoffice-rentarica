import React, { useState } from 'react'
import './styles.css'
import { InputText } from 'primereact/inputtext'
import { MobileFilter } from '../MobileFilter'
import { Filters } from '../Filters'

interface IHeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = (props) => {
  const [mobileFilter, setMobileFilter] = useState(false)

  return (
    <>
      <div className='flex items-center mb-6 relative'>
        <div className='flex items-center self-end mr-2 rounded-2xl h-fit w-1/2 xl:mr-20'>
          <span className='p-input-icon-left w-full'>
            <i className=' fa fa-search' />

            <InputText
              placeholder='Buscar por nombre o codigo...'
              className='rounded-lg placeholder:text-xs outline-none p-2 w-full min-w-[200px]'
            />
          </span>
        </div>
      </div>
    </>
  )
}

export default Header
