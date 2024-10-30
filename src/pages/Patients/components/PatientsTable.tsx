import { useState } from 'react'
import { Button, Card } from '../../../components/shared'
import { usePatientState } from '../context'
import CreatePatientModal from './modals/CreatePatientModal'
import { getAge } from '../../../utility/dateFormat'

const PatientsTable = () => {
  const { patients } = usePatientState()
  const [create, setCreate] = useState(false)

  return (
    <Card
      title='Lista de pacientes'
      rightHeader={<Button onClick={() => setCreate(true)} text='Crear' />}
      pd={2}
      bodyClassName='!px-2'
    >
      {/* Cabecera del calendario */}
      <div className='grid grid-cols-4 bg-blue-50 p-4 rounded-lg text-sm text-blue-900 font-semibold mt-4'>
        <div>Nombre</div>
        <div>Edad</div>
        <div>Alergias</div>
        <div>Ultima cita</div>
      </div>

      {/* Lista de citas */}
      <div className='divide-y divide-gray-200'>
        {patients?.map((appointment, index) => (
          <div key={index} className='grid grid-cols-4 py-4'>
            <div className='text-gray-800 pl-4'>{appointment.name}</div>
            <div className='text-gray-600'>
              {getAge(appointment.dob.split('T')[0])}
            </div>
            <div className='text-gray-600 bg-red-200 w-fit p-2 text-xs rounded-lg'>
              Aceptada
            </div>
            <div className='text-gray-600 text-sm'>22/10/2024</div>
          </div>
        ))}
      </div>

      <CreatePatientModal visible={create} onHide={() => setCreate(false)} />
    </Card>
  )
}

export default PatientsTable
