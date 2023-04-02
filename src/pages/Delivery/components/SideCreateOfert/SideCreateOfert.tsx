import React from 'react'

import './styles.css'

// Components
import { FileUpload } from 'primereact/fileupload'
import Button from '../../../../components/shared/Button'

interface ISideCreateDeliveryProps {
  children?: React.ReactNode
  active: boolean
  close: () => void
}

const SideCreateDelivery: React.FC<ISideCreateDeliveryProps> = ({
  active,
  close,
}) => {
  return (
    <div
      className={`fixed  overflow-y-auto top-0 z-[2000] w-[40%] h-[100vh] bg-slate-100 shadow-md px-6 transition-all duration-300 ${
        active ? 'right-0' : '-right-full'
      }`}
    >
      {/* Header */}

      <div className='py-6 relative flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>Agregar delivery</h3>
        <i
          className='fa fa-regular fa-rectangle-xmark cursor-pointer text-xl transition-all hover:text-purple-500 hover:scale-105'
          onClick={close}
        />
        {/*ADDED PRODUCTS*/}
      </div>

      {/* FORM */}
      <form className='mt-3 relative flex flex-col'>
        <div className='absolute top-0 -left-10 cursor-pointer flex flex-col '>
          <div className='bg-green-400 rounded-tl-lg text-white grid hover:left-[-50px] place-items-center  rounded-bl-lg z-[1] transition-all h-16 w-4 fixed hover:scale-110'>
            1
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 mb-5'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Nombre</label>
            <input className='outline-none rounded-md p-2 border focus:border-purple-300' />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Telefono</label>
            <input className='outline-none rounded-md p-2 border focus:border-purple-300' />
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 text-xs'>Cedula</label>
          <input className='outline-none rounded-md p-2 border focus:border-purple-300' />
        </div>
        <div className='flex flex-col mt-5'>
          <label className='mb-2 text-xs'>Placa</label>
          <input className='outline-none rounded-md p-2 border focus:border-purple-300' />
        </div>

        <div className='grid grid-cols-3 gap-1 mb-5 mt-8'>
          <Button text='Cancelar' color='danger' icon='fa fa-x' />
          <Button text='Añadir' color='success' icon='fa fa-plus' />
          <Button text='Guardar' icon='fa fa-floppy-disk' />
        </div>
      </form>
    </div>
  )
}

export default SideCreateDelivery
