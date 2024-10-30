import { routerType } from '../../types/router.types'

// Pages | Components
import { Dashboard, Reports } from '../../pages'
import Appointments from '../../pages/Appointment'
import { AppointmentProvider } from '../../pages/Appointment/context'
import Doctors from '../../pages/Doctors'
import { DoctorProvider } from '../../pages/Doctors/context'
import Patients from '../../pages/Patients'
import { PatientProvider } from '../../pages/Patients/context'
import Profile from '../../pages/Profile'
import { ProfileProvider } from '../../pages/Profile/context'
import Schedule from '../../pages/Schedule'
import { ScheduleProvider } from '../../pages/Schedule/context'
import PatientPage from '../../pages/Patients/PatientPage'

export const adminPages: routerType[] = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
    title: 'home',
  },
  {
    path: '/admin/citas',
    element: <Appointments />,
    title: 'home',
  },
  {
    path: '/admin/pacientes',
    element: (
      <PatientProvider>
        <Patients />
      </PatientProvider>
    ),
    title: 'Cuadre',
  },
  {
    path: '/admin/pacientes/:id',
    element: (
      <PatientProvider>
        <PatientPage />
      </PatientProvider>
    ),
    title: 'Cuadre',
  },
  {
    path: '/admin/doctores',
    element: (
      <DoctorProvider>
        <Doctors />
      </DoctorProvider>
    ),
    title: 'Cuadre',
  },
  {
    path: '/admin/reports',
    element: <Reports />,
    title: 'home',
  },

  {
    path: '/admin/agenda',
    element: (
      <ScheduleProvider>
        <Schedule />
      </ScheduleProvider>
    ),
    title: 'home',
  },
  {
    path: '/admin/perfil',
    element: (
      <>
        <Profile />
      </>
    ),
    title: 'home',
  },

  {
    path: '*',
    element: <Dashboard />,
    title: 'home',
  },
]
