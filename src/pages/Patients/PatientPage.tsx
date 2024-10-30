import React from 'react'
import PatientsTable from './components/PatientsTable'
import { Card } from '../../components/shared'

interface IPatientPageProps {
  children?: React.ReactNode
}

const PatientPage: React.FC<IPatientPageProps> = (props) => {
  return (
    <>
      <Card title='' className='mb-10'>
        <div className='flex'>
          <div className='flex flex-col justify-center space-y-2  '>
            <h2 className='text-3xl font-semibold mb-3'>Jayden Bueno</h2>
            <p className='text-gray-600'>Edad: 2 años</p>
            <p className='text-gray-600'>Correo: jayden@email.com</p>
            <p className='text-gray-600'>Telefono: 849-589-9658</p>
            <p className='text-gray-600'>
              Direccion: Av república de colombia res carmen maria 2 #21
            </p>
          </div>
        </div>
      </Card>
      <Card title='Historial Medico'></Card>
      <div className='grid grid-cols-2 gap-6 my-6'>
        <Card title='Alergias'></Card>
        <Card title='Medicaciones actuales'></Card>
      </div>
      <Card title='Observaciones'></Card>
    </>
  )
}

export default PatientPage
