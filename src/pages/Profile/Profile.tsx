import React, { useState } from 'react'
import { Button } from '../../components/shared'
import { DayCard } from '../Schedule/Schedule'
import { useAppSelector } from '../../redux/store'
import { CiCirclePlus, CiCircleRemove } from 'react-icons/ci'
import { Checkbox } from 'primereact/checkbox'
import { useProfileState } from './context'
import { IoCopyOutline } from 'react-icons/io5'
import { MdContentPasteGo } from 'react-icons/md'
import { toast } from '../../App'

interface IProfileProps {
  children?: React.ReactNode
}

const Profile: React.FC<IProfileProps> = (props) => {
  const { user } = useAppSelector((state) => state.auth)
  const { handleUpdateSchedule } = useProfileState()
  const [selectedDay, setSelectedDay] = useState<
    | 'lunes'
    | 'martes'
    | 'miercoles'
    | 'jueves'
    | 'viernes'
    | 'sabado'
    | 'domingo'
  >('lunes')
  const { doctorSchedule, setDoctorSchedule } = useProfileState()
  // Estado para el horario de trabajo
  const [schedule, setSchedule] = useState<any>({
    monday: { start: '09:00 AM', end: '05:00 PM' },
  })

  const [time, setTime] = useState<string>('')
  const [copyHours, setCopyHours] = useState<string[]>([])

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  // Función para manejar el cambio de contraseña
  const handlePasswordChange = (e: any) => {
    const { name, value } = e.target
    setPasswords({
      ...passwords,
      [name]: value,
    })
  }

  const handlePasswordSubmit = (e: any) => {
    e.preventDefault()
    // Lógica para manejar el cambio de contraseña
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('Las contraseñas no coinciden')
    } else {
      alert('Contraseña actualizada con éxito')
    }
  }

  const handlePushHour = () => {
    if (!time) {
      return toast.current?.show({
        severity: 'error',
        summary: 'Agrega la hora',
      })
    }
    if (doctorSchedule[selectedDay].hours.includes(time)) {
      return toast.current?.show({
        severity: 'error',
        summary: 'Ya lo tienes agregado',
      })
    }

    setDoctorSchedule((prev: any) => ({
      ...prev,
      [selectedDay]: { hours: [...prev[selectedDay].hours, time] },
    }))
  }

  const handleRemoveHour = (time: string) => {
    setDoctorSchedule((prev: any) => ({
      ...prev,
      [selectedDay]: {
        hours: [...prev[selectedDay].hours.filter((i: any) => i !== time)],
      },
    }))
  }

  const handlePasteSchedule = () => {
    setDoctorSchedule((prev: any) => ({
      ...prev,
      [selectedDay]: { hours: copyHours },
    }))
  }

  return (
    <section className='p-4 bg-white rounded-lg shadow-lg'>
      {/* Sección de perfil del doctor */}
      <div className='mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgNfLEfBKu_ToRwPiIOSq72Rev-RBpgC7yA&s' // Imagen del doctor
              alt='Doctor'
              className='w-40 h-40 rounded-full object-cover'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='text-2xl font-semibold'>Dr. {user.fullname}</h2>
            <p className='text-gray-600'>Especialidad: Cardiología</p>
            <p className='text-gray-600'>Correo: {user.email}</p>
          </div>
        </div>
      </div>

      {/* Sección del horario de trabajo */}
      <div className='mb-10'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl text-blue-900'>Horario de Trabajo</h2>
          <Button text='Guardar horario' onClick={handleUpdateSchedule} />
        </div>
        <div className='flex w-full mb-2'>
          {Object.keys(doctorSchedule).map((i: any) => (
            <DayCard
              className={`w-full`}
              badge
              onClick={() => setSelectedDay(i)}
              title={i}
              btnClassName={`${selectedDay === i && 'bg-gray-200'}`}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
          <div className='flex items-center justify-between bg-blue-50 p-4 rounded-lg col-span-5'>
            <div>
              <label className='mr-2'>Este dia esta habilitado</label>
              <Checkbox checked={true} />
            </div>
            <div className='flex items-center gap-3'>
              <label className='mr-2'>Añadir hora de cita</label>
              <div className='flex items-center'>
                <input
                  type='time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className='p-2 border border-gray-300 rounded-md'
                />
              </div>
              <h3
                className='text-3xl uppercase text-blue-700 text-center cursor-pointer'
                onClick={() => {
                  handlePushHour()
                }}
              >
                <CiCirclePlus />
              </h3>
              {doctorSchedule[selectedDay].hours.length ? (
                <Button
                  tooltip='Copiar'
                  iconButton
                  className='text-lg relative ml-8 uppercase text-blue-700 text-center cursor-pointer'
                  onClick={() =>
                    setCopyHours(doctorSchedule[selectedDay].hours)
                  }
                  icon={<IoCopyOutline />}
                ></Button>
              ) : (
                ''
              )}
              {copyHours.length ? (
                <Button
                  tooltip='Pegar'
                  iconButton
                  className='text-lg relative uppercase text-blue-700 text-center cursor-pointer'
                  onClick={handlePasteSchedule}
                  icon={<MdContentPasteGo />}
                ></Button>
              ) : (
                ''
              )}
            </div>
          </div>
          {doctorSchedule[selectedDay].hours?.map((day: any) => (
            <div
              key={day}
              className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'
            >
              <div className='flex items-center  w-full space-x-2'>
                <input
                  type='time'
                  value={day}
                  className='p-2 border border-gray-300 rounded-md'
                />
                <h3
                  className='text-3xl uppercase text-red-700 text-center cursor-pointer'
                  onClick={() => handleRemoveHour(day)}
                >
                  <CiCircleRemove />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección para cambiar la contraseña */}
      <div>
        <h2 className='text-2xl text-blue-900 mb-6'>Cambiar Contraseña</h2>
        <form onSubmit={handlePasswordSubmit} className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block mb-2'>Contraseña Actual</label>
              <input
                type='password'
                name='currentPassword'
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
                className='p-2 border border-gray-300 w-full rounded-md'
                required
              />
            </div>
            <div></div>
            <div>
              <label className='block mb-2'>Nueva Contraseña</label>
              <input
                type='password'
                name='newPassword'
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className='p-2 border border-gray-300 w-full rounded-md'
                required
              />
            </div>
            <div>
              <label className='block mb-2'>Confirmar Nueva Contraseña</label>
              <input
                type='password'
                name='confirmPassword'
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                className='p-2 border border-gray-300 w-full rounded-md'
                required
              />
            </div>
          </div>
          <div className='mt-6'>
            <Button text='Cambiar Contraseña'></Button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Profile
