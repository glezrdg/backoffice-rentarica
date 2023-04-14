import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import React, { useState } from 'react'
import './styles.css'
import { PageHeader } from '../../components/layout'
import { NotesContainer, SideNav } from './components'

interface INotesProps {
  children?: React.ReactNode
}

const Notes: React.FC<INotesProps> = (props) => {
  return (
    <>
      {/* Header */}
      <PageHeader title='Notas' right={'.'} />

      <div className='flex items-center mt-8 mb-6'>
        <div className='flex items-center self-end px-2 rounded-2xl h-fit w-fit flex-1'>
          <span className='p-input-icon-left w-full'>
            <i className=' fa fa-search' />

            <InputText
              placeholder='Buscar por titulo...'
              className='rounded-lg placeholder:text-xs outline-none p-2 w-full'
            />
          </span>
        </div>
      </div>

      <div className='grid md:grid-cols-[1fr_2fr] gap-5'>
        <SideNav />
        <NotesContainer />
      </div>
    </>
  )
}

export default Notes
