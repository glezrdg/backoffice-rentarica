import React from 'react'

import './styles.css'

// Components
import { CompanyForm, DeliveryForm } from './components/forms'
import { ICompany, IDelivery } from '../../models'
import { useDeliveryState } from '../../context'

interface ISideCreateProps {
  children?: React.ReactNode
  active: boolean
  close: () => void
  type: string
}

const SideCreate: React.FC<ISideCreateProps> = ({ active, close, type }) => {
  const { setCompany, setDelivery } = useDeliveryState()

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
          onClick={() => {
            setCompany({} as ICompany)
            close()
          }}
        />
        {/*ADDED PRODUCTS*/}
      </div>

      {/* FORM */}

      <DeliveryForm
        onClose={() => {
          setDelivery({} as IDelivery)
          close()
        }}
      />
    </div>
  )
}

export default SideCreate
