import React from 'react'

// Components
import { useDeliveryState } from '../../context'
import { Checkbox } from 'flowbite-react'

interface ProvincesTableProps {}

const PROVINCES = [
  {
    habilitado: true,
    codigo: 1,
    nombre: 'Azua',
  },
  {
    habilitado: true,
    codigo: 2,
    nombre: 'Bahoruco',
  },
  {
    habilitado: true,
    codigo: 3,
    nombre: 'Barahona',
  },
  {
    habilitado: true,
    codigo: 4,
    nombre: 'Dajabón',
  },
  {
    habilitado: true,
    codigo: 5,
    nombre: 'Distrito Nacional',
  },
  {
    habilitado: true,
    codigo: 6,
    nombre: 'Duarte',
  },
  {
    habilitado: true,
    codigo: 7,
    nombre: 'Elías Piña',
  },
  {
    habilitado: true,
    codigo: 8,
    nombre: 'El Seibo',
  },
  {
    habilitado: true,
    codigo: 9,
    nombre: 'Espaillat',
  },
  {
    habilitado: true,
    codigo: 10,
    nombre: 'Hato Mayor',
  },
  {
    habilitado: true,
    codigo: 11,
    nombre: 'Hermanas Mirabal',
  },
  {
    habilitado: false,
    codigo: 12,
    nombre: 'Independencia',
  },
  {
    habilitado: false,
    codigo: 13,
    nombre: 'La Altagracia',
  },
  {
    habilitado: false,
    codigo: 14,
    nombre: 'La Romana',
  },
  {
    habilitado: false,
    codigo: 15,
    nombre: 'La Vega',
  },
  {
    habilitado: false,
    codigo: 16,
    nombre: 'María Trinidad Sánchez',
  },
  {
    habilitado: false,
    codigo: 17,
    nombre: 'Monseñor Nouel',
  },
  {
    habilitado: false,
    codigo: 18,
    nombre: 'Monte Cristi',
  },
  {
    habilitado: false,
    codigo: 19,
    nombre: 'Monte Plata',
  },
  {
    habilitado: false,
    codigo: 20,
    nombre: 'Pedernales',
  },
  {
    habilitado: false,
    codigo: 21,
    nombre: 'Peravia',
  },
  {
    habilitado: false,
    codigo: 22,
    nombre: 'Puerto Plata',
  },
  {
    habilitado: false,
    codigo: 23,
    nombre: 'Samaná',
  },
  {
    habilitado: false,
    codigo: 24,
    nombre: 'Sánchez Ramírez',
  },
  {
    habilitado: false,
    codigo: 25,
    nombre: 'San Cristóbal',
  },
  {
    habilitado: false,
    codigo: 26,
    nombre: 'San José de Ocoa',
  },
  {
    habilitado: false,
    codigo: 27,
    nombre: 'San Juan',
  },
  {
    habilitado: false,
    codigo: 28,
    nombre: 'San Pedro de Macorís',
  },
  {
    habilitado: false,
    codigo: 29,
    nombre: 'Santiago',
  },
  {
    habilitado: false,
    codigo: 30,
    nombre: 'Santiago Rodríguez',
  },
  {
    habilitado: true,
    codigo: 31,
    nombre: 'Santo Domingo',
  },
  {
    habilitado: true,
    codigo: 32,
    nombre: 'Valverde',
  },
]

const ProvincesTable: React.FC<ProvincesTableProps> = ({}) => {
  const { companies, setCompany } = useDeliveryState()
  return (
    <div className='overflow-hidden rounded-xl'>
      <h4 className='my-4 text-xl font-medium'>Provincias</h4>
      {PROVINCES.map((p) => (
        <div className='grid grid-cols-2 w-full p-2 hover:bg-slate-200 transition-all'>
          <p>{p.nombre}</p>
          <Checkbox checked={p.habilitado} className='m-auto' />
        </div>
      ))}
    </div>
  )
}

export default ProvincesTable
