import React from 'react'

// Components
import { useDeliveryState } from '../../context'
import { Checkbox } from 'flowbite-react'

interface MunicipiosTableProps {}

const MUNICIPIOS = [
  {
    habilitado: false,
    codigo: 146,
    nombre: 'Santo Domingo Este',
  },
  {
    habilitado: true,
    codigo: 147,
    nombre: 'Boca Chica',
  },
  {
    habilitado: true,
    codigo: 148,
    nombre: 'Los Alcarrizos',
  },
  {
    habilitado: true,
    codigo: 149,
    nombre: 'Pedro Brand',
  },
  {
    habilitado: false,
    codigo: 150,
    nombre: 'San Antonio de Guerra',
  },
  {
    habilitado: false,
    codigo: 151,
    nombre: 'Santo Domingo Norte',
  },
  {
    habilitado: true,
    codigo: 152,
    nombre: 'Santo Domingo Oeste',
  },
]

const MunicipiosTable: React.FC<MunicipiosTableProps> = ({}) => {
  const { companies, setCompany } = useDeliveryState()

  return (
    <div className='overflow-hidden rounded-xl'>
      <h4 className='my-4 text-xl font-medium'>Municipios</h4>
      {MUNICIPIOS.map((p) => (
        <div className='grid grid-cols-2 w-full p-2 hover:bg-slate-200 transition-all'>
          <p className='text-left'>{p.nombre}</p>
          <Checkbox checked={p.habilitado} className='m-auto' />
        </div>
      ))}
    </div>
  )
}

export default MunicipiosTable
