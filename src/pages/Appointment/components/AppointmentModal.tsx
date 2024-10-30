import React, { FC, useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { useAppointmentState } from '../context'
import { Button, Card } from '../../../components/shared'
import { Dropdown } from 'primereact/dropdown'
import { FaPlus } from 'react-icons/fa'
import CreatePatientModal from '../../Patients/components/modals/CreatePatientModal'

interface AppointmentModalProps {
  children?: React.ReactNode
  visible: boolean
  onHide: any
}

const AppointmentModal: FC<AppointmentModalProps> = ({ visible, onHide }) => {
  const { appointment } = useAppointmentState()

  const [createPatient, setCreatePatient] = useState(false)
  return (
    <Dialog
      header={
        <h3 className='text-lg font-[500] text-gray-800'>
          Cita de {appointment?.fullname}
        </h3>
      }
      visible={visible}
      modal
      onHide={onHide}
    >
      <div className='grid grid-cols-2 w-fit gap-x--6 gap-y-3'>
        <p>Razon de cita:</p>
        <span className='font-semibold'>{appointment?.reason}</span>
        <p>Email:</p>
        <span className='font-semibold'>{appointment?.email}</span>
        <p>hora de cita:</p>
        <span className='font-semibold'>{appointment?.time}</span>
      </div>

      <Card
        title='Paciente'
        bodyClassName='!px-2 mt-2'
        rightHeader={
          <Button
            icon={<FaPlus />}
            iconButton
            onClick={() => setCreatePatient(true)}
          />
        }
        className='mt-4'
        pd={1}
      >
        <Dropdown placeholder='Seleccione a un paciente' className='w-full' />
      </Card>

      <div className='flex mt-4'>
        <Button text='Cancelar' className=' !rounded-none' color='danger' />
        <Button text='Ir con paciente' className='flex-1 !rounded-none' />
      </div>

      <CreatePatientModal
        visible={createPatient}
        onHide={() => setCreatePatient(false)}
      />
    </Dialog>
  )
}

export default AppointmentModal
