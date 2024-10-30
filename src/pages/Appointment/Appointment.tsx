import React, { useEffect, useState } from 'react'

// Components
import { Card } from '../../components/shared'
import CardWidget from '../Reports/components/CardWidget'
import Header from './components/Header'
import { useAppointmentState } from './context'
import { dateFormat } from '../../utility/dateFormat'
import AppointmentModal from './components/AppointmentModal'
// import PdfReportModal from './components/modal/PdfReportModal'

interface IAppointmentsProps {
  children?: React.ReactNode
}

const Appointments: React.FC<IAppointmentsProps> = (props) => {
  const { appointments, setAppointment, dashboard, handleGetAppointments } =
    useAppointmentState()
  const [appointmentModal, setAppointmentModal] = useState(false)

  useEffect(() => {
    handleGetAppointments()
  }, [])

  return (
    <>
      {/* Header */}
      {/* <PageHeader title='Citas' /> */}

      {/* Header */}
      <div className='grid sm:grid-cols-3 gap-5 w-full mb-6'>
        <CardWidget
          color='green'
          background='green'
          title='Para hoy'
          noCash
          value={dashboard.today}
        />
        <CardWidget
          color='yellow'
          background='yellow'
          title='Esta semana'
          noCash
          value={dashboard.week}
        />
        <CardWidget
          color='blue'
          background='blue'
          noCash
          title='Este mes'
          value={dashboard.month}
        />
      </div>
      <Card title='' className='mb-6' pd={4}>
        <Header />
      </Card>

      <div className='w-full grid grid-cols-3 gap-5'>
        {appointments?.map((i) => (
          <div
            className='bg-white shadow-md w-full p-3 border cursor-pointer'
            onClick={() => {
              setAppointment(i)
              setAppointmentModal(true)
            }}
          >
            <div className='flex items-center justify-between mb-4'>
              <h2>{i.fullname}</h2>
              <span className='bg-green-300 p-2 rounded-md uppercase text-sm text-white'>
                Activo
              </span>
            </div>

            <div className='flex items-center justify-between'>
              <h2 className='font-semibold text-sm text-gray-700'>
                {i.reason}
              </h2>
              <span className='uppercase text-sm'>
                {dateFormat(new Date(i.date), 'date')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <AppointmentModal
        visible={appointmentModal}
        onHide={() => setAppointmentModal(false)}
      />
    </>
  )
}

export default Appointments
