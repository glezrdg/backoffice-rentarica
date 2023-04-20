import React from 'react'
import { useOfertState } from '../../context'

import './styles.css'

// Components
import OfertForm from './components/OfertForm'
import { IOfert } from '../../models/IOfert'

interface ISideCreateOfertProps {
  children?: React.ReactNode
  active: boolean
  close: () => void
}

const SideCreateOfert: React.FC<ISideCreateOfertProps> = ({
  active,
  close,
}) => {
  const { ofert, setOfert } = useOfertState()

  const onClose = () => {
    setOfert({} as IOfert)
    close()
  }

  return (
    <div
      className={`fixed  overflow-y-auto top-0 z-[1000] w-[100vw] lg:w-[40%] h-[100vh] bg-slate-100 shadow-md px-6 transition-all duration-300 ${
        active ? 'right-0' : '-right-full'
      }`}
    >
      {/* Header */}

      <div className='py-6 relative flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>
          {ofert?._id ? 'Actualizar' : 'Añadir'} oferta
        </h3>
        <i
          className='fa fa-regular fa-rectangle-xmark cursor-pointer text-xl transition-all hover:text-purple-500 hover:scale-105'
          onClick={onClose}
        />
        {/*ADDED PRODUCTS*/}
      </div>

      {/* FORM */}
      <OfertForm onClose={onClose} />
    </div>
  )
}

export default SideCreateOfert
