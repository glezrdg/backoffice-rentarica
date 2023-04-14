import React from 'react'
import './styles.css'
import { InputText } from 'primereact/inputtext'

interface IClientAddressProps {
  children?: React.ReactNode
}

const ClientAddress: React.FC<IClientAddressProps> = (props) => {
  return (
    <>
      <form className='relative bg-slate-100 p-6 rounded-lg'>
        <div className='absolute top-0 -left-10 cursor-pointer flex flex-col '>
          <div className='bg-green-400 rounded-tl-lg text-white grid hover:left-[-50px] place-items-center  rounded-bl-lg z-[1] transition-all h-16 w-4 fixed hover:scale-110'>
            1
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 mb-5'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Nombre</label>
            <InputText className='h-10' disabled />
            {/* <input className='outline-none rounded-md p-2 border focus:border-purple-300' /> */}
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Telefono</label>
            <InputText className='h-10' disabled />
          </div>
        </div>

        <div className='flex flex-col mb-5'>
          <label className='mb-2 text-xs'>Provincia</label>
          <select
            disabled
            className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'
          >
            <option>Camisas</option>
            <option>Tenis</option>
            <option>Pantalones</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='mb-2 text-xs'>Instrucciones</label>
          <textarea
            disabled
            className='outline-none border-none rounded-md h-40 p-2 border !focus:border-purple-300'
          />
        </div>
      </form>
    </>
  )
}

export default ClientAddress
