import { workSchedule } from '../../../utility/data'
import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
} from 'react'
import { useAppSelector } from '../../../redux/store'
import { toast } from '../../../App'
import {
  getAppointmentDashboard,
  getAppointments,
} from '../services/appointment.service'
import { IAppointment, IAppointmentDashboard } from '../models/appointment'

const initialState: InitialStateProps = {
  appointments: [],
  appointment: null,
  setAppointment: () => {},
  handleGetAppointments: () => {},
  setSearch: () => {},
  dashboard: {
    today: 0,
    week: 0,
    month: 0,
  },
}

const AppointmentContext = createContext(initialState)

export interface AppointmentProviderProps {
  children: ReactElement
}

export const AppointmentProvider: FC<AppointmentProviderProps> = ({
  children,
}) => {
  const { user } = useAppSelector((state) => state.auth)
  const [appointments, setAppointments] = useState<IAppointment[]>([])
  const [appointment, setAppointment] = useState<IAppointment | null>(null)
  const [filteredAppointments, setFilteredAppointments] = useState<
    IAppointment[]
  >([])
  const [search, setSearch] = useState('')
  const [dashboard, setDashboard] = useState<IAppointmentDashboard>(
    initialState.dashboard
  )

  useEffect(() => {
    handleGetAppointments()
    handleGetAppointmentsDashboard()
  }, [])

  useEffect(() => {
    handleSearch()
  }, [search])

  const handleGetAppointments = async (queries?: { date: string }) => {
    setSearch('')
    setFilteredAppointments([])
    try {
      const data = await getAppointments(queries)
      setAppointments(data)
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Error leyendo las citas',
      })
    }
  }

  const handleSearch = () => {
    if (search) {
      setFilteredAppointments(
        appointments.filter((i) =>
          i.fullname.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      setFilteredAppointments(appointments)
    }
  }

  const handleGetAppointmentsDashboard = async () => {
    try {
      const data = await getAppointmentDashboard()
      setDashboard(data)
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Error leyendo dashboard',
      })
    }
  }

  return (
    <AppointmentContext.Provider
      value={{
        appointments: filteredAppointments.length
          ? filteredAppointments
          : appointments,
        handleGetAppointments,
        dashboard,
        setSearch,
        appointment,
        setAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export const useAppointmentState = () => useContext(AppointmentContext)

export interface InitialStateProps {
  appointment: IAppointment | null
  appointments: IAppointment[]
  handleGetAppointments: (queries?: { date: string }) => void
  setSearch: (p: any) => void
  setAppointment: (p: any) => void
  dashboard: IAppointmentDashboard
}
