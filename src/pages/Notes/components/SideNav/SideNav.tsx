import React from 'react'
import './styles.css'

// Components
import { NotesModal } from '../NotesModal'

interface ISideNavProps {
  children?: React.ReactNode
}

const SideNav: React.FC<ISideNavProps> = (props) => {
  return (
    <>
      <div className='p-4 bg-white rounded-lg shadow-sm w-full'>
        <div>
          <button
            className='w-full inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
            data-te-toggle='modal'
            data-te-target='#createNoteModal'
            data-te-ripple-init
            data-te-ripple-color='light'
          >
            <i className='fa fa-plus mr-2' />
            Notes
          </button>

          <NotesModal />
        </div>
        <ul className='my-3'>
          <li className='text-sm p-2 cursor-pointer mb-1 rounded-md bg-purple-100 text-purple-5 00 flex items-center'>
            <i className='fa fa-note-sticky'></i>
            <p className='pl-4'>Todos</p>
          </li>
          <li className='text-sm p-2 cursor-pointer rounded-md hover:bg-purple-100 hover:text-purple-5  00 flex items-center'>
            <i className='fa fa-star'></i>
            <p className='pl-4'>Favoritos</p>
          </li>
        </ul>

        <label className='text-xs pl-2 text-slate-400'>Labels</label>

        <ul className='pl-2 mt-4  '>
          <li className='flex items-center'>
            <div className='p-1 rounded-full bg-green-400 w-1 mr-2'></div>
            <p className='text-xs uppercase'>Compras</p>
          </li>
          <li className='flex items-center my-3'>
            <div className='p-1 rounded-full bg-blue-400 w-1 mr-2'></div>
            <p className='text-xs uppercase'>Ventas</p>
          </li>
          <li className='flex items-center'>
            <div className='p-1 rounded-full bg-yellow-400 w-1 mr-2'></div>
            <p className='text-xs uppercase'>Ordenes</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideNav
