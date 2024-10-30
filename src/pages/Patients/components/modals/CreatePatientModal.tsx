import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from '../../../../components/shared'
import { getPatients, postPatient } from '../../services'
import { Calendar } from 'primereact/calendar'
import { usePatientState } from '../../context'

interface ICreatePatientModalProps {
  children?: React.ReactNode
  visible: boolean
  onHide: any
}

const CreatePatientModal: React.FC<ICreatePatientModalProps> = ({
  visible,
  onHide,
}) => {
  const { handlePostPatients } = usePatientState()
  const [patient, setPatient] = useState({
    name: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    medicalHistory: '',
    allergies: '',
    currentMedications: '',
    observations: '',
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setPatient((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleDateChange = (e: any) => {
    setPatient((prevState) => ({
      ...prevState,
      dob: e.value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await handlePostPatients(patient)

    // Lógica para agregar paciente (puedes integrar con tu backend)
  }

  return (
    <div className='card flex justify-content-center'>
      <Dialog
        header={
          <h3 className='text-lg font-[500] text-gray-800'>Agregar paciente</h3>
        }
        visible={visible}
        modal
        onHide={onHide}
      >
        <>
          <form
            onSubmit={handleSubmit}
            className='space-y-6 grid grid-cols-2 gap-4 bg-white shadow-lg rounded-lg p-6 w-[60vw]'
          >
            {/* Nombre del Paciente */}
            <div className='flex flex-col space-y-2'>
              <label className='text-sm'>Nombre del Paciente</label>
              <InputText
                value={patient.name}
                onChange={handleInputChange}
                name='name'
                placeholder='Ingrese el nombre completo'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Fecha de Nacimiento */}
            <div className='flex flex-col space-y-2 !mt-0'>
              <label className='text-sm'>Fecha de Nacimiento</label>
              <Calendar
                value={patient.dob}
                onChange={handleDateChange}
                showIcon
                placeholder='Seleccione la fecha de nacimiento'
                className='w-full'
              />
            </div>

            {/* Dirección */}
            <div className='flex flex-col col-span-2 space-y-2'>
              <label className='text-sm'>Dirección</label>
              <InputText
                value={patient.address}
                onChange={handleInputChange}
                name='address'
                placeholder='Ingrese la dirección del paciente'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Correo Electrónico */}
            <div className='flex flex-col space-y-2'>
              <label className='text-sm'>Correo Electrónico</label>
              <InputText
                value={patient.email}
                onChange={handleInputChange}
                name='email'
                placeholder='Ingrese el correo electrónico'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Teléfono */}
            <div className='flex flex-col space-y-2'>
              <label className='text-sm'>Número de Teléfono</label>
              <InputText
                value={patient.phone}
                onChange={handleInputChange}
                name='phone'
                placeholder='Ingrese el número de teléfono'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Historial Médico */}
            <div className='flex flex-col space-y-2'>
              <label className='text-sm'>Historial Médico</label>
              <InputTextarea
                value={patient.medicalHistory}
                onChange={handleInputChange}
                name='medicalHistory'
                rows={3}
                placeholder='Describa el historial médico del paciente (enfermedades previas, cirugías, etc.)'
                className='p-inputtextarea w-full border rounded-md'
              />
            </div>
            {/* Observaciones del Doctor */}
            <div className='flex flex-col space-y-2'>
              <label className='text-sm'>Observaciones</label>
              <InputTextarea
                value={patient.observations}
                onChange={handleInputChange}
                name='observations'
                rows={3}
                placeholder='Observaciones adicionales que el doctor deba saber'
                className='p-inputtextarea w-full border rounded-md'
              />
            </div>

            {/* Alergias */}
            <div className='flex flex-col space-y-2'>
              <label className='text-sm'>Alergias</label>
              <InputText
                value={patient.allergies}
                onChange={handleInputChange}
                name='allergies'
                placeholder='Ingrese las alergias del paciente'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Medicamentos Actuales */}
            <div className='flex flex-col space-y-2'>
              <label className='text-sm'>Medicamentos Actuales</label>
              <InputText
                value={patient.currentMedications}
                onChange={handleInputChange}
                name='currentMedications'
                placeholder='Ingrese los medicamentos actuales del paciente'
                className='p-inputtext w-full border rounded-md'
              />
            </div>

            {/* Botón de Enviar */}
            <div className='flex justify-center col-span-2'>
              <Button
                text='Agregar Paciente'
                className='p-button p-button-rounded w-full'
              />
            </div>
          </form>
        </>
      </Dialog>
    </div>
  )
}

export default CreatePatientModal
