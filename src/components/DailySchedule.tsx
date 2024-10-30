import { useState } from 'react'
import { Card } from './shared'
import { useAppointmentState } from '../pages/Appointment/context'
import { useProfileState } from '../pages/Profile/context'
import { useScheduleState } from '..//pages/Schedule/context'

export const getCurrentHour = (appointments: any, schedule: any) => {
  return appointments.find((i: any) => i.time === schedule)
}

const DailySchedule = ({ className }: any) => {
  const { appointments } = useAppointmentState()
  const { doctorSchedule } = useProfileState()
  const { selectedDay } = useScheduleState()

  return (
    <div className='w-full'>
      {/* Cabecera del calendario */}
      <div className='grid grid-cols-4 bg-blue-50 p-3 text-sm text-blue-900 font-semibold'>
        <div>Hora de cita</div>
        <div>Nombre</div>
        <div>Servicio</div>
        <div>Estado</div>
      </div>

      {/* Lista de citas */}
      <div className='divide-y divide-gray-200'>
        {doctorSchedule[selectedDay.dayTitle].hours.map((schedule, index) => (
          <>
            {getCurrentHour(appointments, schedule) ? (
              <div
                key={index}
                className='grid grid-cols-4 bg-yellow-50 items-center h-20 text-sm'
              >
                <div className='text-gray-800 pl-4'>
                  {getCurrentHour(appointments, schedule)?.time}
                </div>
                <div className='text-gray-600'>
                  {getCurrentHour(appointments, schedule)?.fullname}
                </div>
                <div className='text-gray-600'>
                  {getCurrentHour(appointments, schedule)?.reason}
                </div>
                <div className='text-gray-600 bg-green-200 w-fit p-2 text-xs rounded-lg'>
                  Aceptada
                </div>
              </div>
            ) : (
              <div
                key={index}
                className='grid grid-cols-4 items-center h-20 text-sm bg-green-100'
              >
                <div className='text-gray-800 pl-4'>Libre</div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default DailySchedule
