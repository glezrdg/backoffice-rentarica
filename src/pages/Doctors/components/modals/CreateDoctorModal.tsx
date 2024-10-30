import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Button } from '../../../../components/shared'
import { getDoctors, postDoctor } from '../../services'
import { useDoctorState } from '../../context'
import { Doctor } from '../../models/doctor.model'

interface ICreateDoctorModalProps {
  children?: React.ReactNode
  visible: boolean
  onHide: any
}

const CreateDoctorModal: React.FC<ICreateDoctorModalProps> = ({
  visible,
  onHide,
}) => {
  const { handlePostDoctor } = useDoctorState()
  const [doctor, setDoctor] = useState<Doctor>({
    fullname: '',
    specialty: '',
    email: '',
    phone: '',
  })

  const specialties = [
    { label: 'Cardiología', value: 'Cardiología' },
    { label: 'Dermatología', value: 'Dermatología' },
    { label: 'Pediatría', value: 'Pediatría' },
    { label: 'Neurología', value: 'Neurología' },
    { label: 'Ginecología', value: 'Ginecología' },
  ]

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setDoctor((prevState: any) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleTimeChange = (name: any, value: any) => {
    setDoctor((prevState: any) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await handlePostDoctor(doctor)
    onHide()
    // Lógica para agregar doctor (puedes integrar con tu backend)
  }
  return (
    <div className='card flex justify-content-center'>
      <Dialog
        header={
          <h3 className='text-lg font-[500] text-gray-800'>Agregar doctor</h3>
        }
        visible={visible}
        modal
        onHide={onHide}
      >
        <>
          <form onSubmit={handleSubmit} className='space-y-6 w-[400px]'>
            {/* Nombre del Doctor */}
            <div className='flex flex-col space-y-2'>
              <label className='text-gray-700 text-sm'>Nombre del Doctor</label>
              <InputText
                value={doctor.fullname}
                onChange={handleInputChange}
                name='fullname'
                placeholder='Ingrese el nombre completo'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Especialidad */}
            <div className='flex flex-col space-y-2'>
              <label className='text-gray-700 text-sm'>Especialidad</label>
              <Dropdown
                value={doctor.specialty}
                options={specialties}
                onChange={(e) =>
                  handleInputChange({
                    target: { name: 'specialty', value: e.value },
                  })
                }
                placeholder='Seleccione la especialidad'
                className='w-full'
              />
            </div>

            {/* Correo Electrónico */}
            <div className='flex flex-col space-y-2'>
              <label className='text-gray-700 text-sm'>
                Correo Electrónico
              </label>
              <InputText
                value={doctor.email}
                onChange={handleInputChange}
                name='email'
                placeholder='Ingrese el correo electrónico'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Teléfono */}
            <div className='flex flex-col space-y-2'>
              <label className='text-gray-700 text-sm'>
                Número de Teléfono
              </label>
              <InputText
                value={doctor.phone}
                onChange={handleInputChange}
                name='phone'
                placeholder='Ingrese el número de teléfono'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Botón de Enviar */}
            <div className='flex justify-center'>
              <Button text='Agregar Doctor' className=' w-full h-12' />
            </div>
          </form>
        </>
      </Dialog>
    </div>
  )
}

export default CreateDoctorModal
