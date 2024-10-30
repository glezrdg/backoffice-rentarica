import React, { useEffect, useState } from 'react'
import { Button, Card } from '../../../components/shared'
import { SlPencil } from 'react-icons/sl'
import CreateDoctorModal from './modals/CreateDoctorModal'
import { getDoctors } from '../services'
import { Doctor } from '../models/doctor.model'
import { useDoctorState } from '../context'

const DoctorsTable = () => {
  const { doctors } = useDoctorState()
  const [create, setCreate] = useState(false)

  return (
    <Card
      title='Lista de doctores'
      rightHeader={<Button onClick={() => setCreate(true)} text='Crear' />}
      pd={2}
      bodyClassName='!px-2'
    >
      {/* Cabecera del calendario */}
      <div className='grid grid-cols-[200px_1fr_1fr_1fr_100px] bg-blue-50 p-4 rounded-lg text-sm text-blue-900 font-semibold mt-4'>
        <div>Activo</div>
        <div>Nombre</div>
        <div>Especialidad</div>
        <div>Entrada</div>
      </div>

      {/* Lista de citas */}
      <div className='divide-y divide-gray-200'>
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className='grid grid-cols-[200px_1fr_1fr_1fr_100px] py-4'
          >
            <div className='text-gray-600 bg-green-200 w-fit p-2 h-fit text-xs rounded-lg ml-4'></div>
            <div className='text-gray-800 pl-4'>{doctor.fullname}</div>
            <div className='text-gray-600'>{doctor.specialty}</div>
            <div className='text-gray-600 text-sm'>22/10/2024</div>
            <div
              data-te-ripple-init
              data-te-ripple-color='light'
              className='text-gray-600 text-sm btn bg-gray-50 w-fit cursor-pointer hover:text-yellow-400 transition-colors'
            >
              <SlPencil />
            </div>
          </div>
        ))}
      </div>

      <CreateDoctorModal visible={create} onHide={() => setCreate(false)} />
    </Card>
  )
}

export default DoctorsTable
