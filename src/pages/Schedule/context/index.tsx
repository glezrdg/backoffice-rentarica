import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

// Services
import { ISelectedDay } from '../models/doctor.model'
import { getWeeklyDay } from '../../../utility/dateFormat'
import { useProfileState } from '../../../pages/Profile/context'
import { useAppointmentState } from '../../../pages/Appointment/context'
import { getBusyDays } from '../services'
import dayjs from 'dayjs'

const initialState: InitialStateProps = {
  selectedDay: {
    dayNumber: new Date().getDate(),
    dayTitle: getWeeklyDay(new Date().getDay()),
    isBusy: true,
  },
  setSelectedDay: () => {},
  hours: [],
  daysOfMonth: [],
}

const ScheduleContext = createContext(initialState)

export interface ScheduleProviderProps {
  children: ReactElement
}

export interface IDaysOfMonth {
  dayNumber: number
  dayTitle: string
  isBusy: boolean
}

export const ScheduleProvider = ({ children }: any) => {
  const { handleGetAppointments } = useAppointmentState()
  const [selectedDay, setSelectedDay] = useState<ISelectedDay>(
    initialState.selectedDay
  )
  const [daysOfMonth, setDaysOfMonth] = useState<IDaysOfMonth[]>([])
  const { doctorSchedule } = useProfileState()

  const [hours, setHours] = useState<string[]>([])

  useEffect(() => {
    setHours(doctorSchedule[selectedDay.dayTitle].hours)
    handleGetDateAppointments()
    handleGetBusyDays()
  }, [selectedDay])

  console.log('DAYS OF MONTH', daysOfMonth)

  const handleGetDateAppointments = async () => {
    try {
      await handleGetAppointments({
        date: new Date(new Date().setDate(selectedDay.dayNumber)).toISOString(),
      })
    } catch (error) {}
  }

  const handleGetBusyDays = async () => {
    let todayDay = new Date().getDate()
    const getNext30Days = () => {
      let daysInMonth = dayjs().daysInMonth()
      let days = Array.from({ length: daysInMonth - todayDay + 1 }, (_, i) => ({
        dayNumber: i + todayDay,
        dayTitle: getWeeklyDay(
          new Date(new Date().setDate(todayDay + i)).getDay()
        ),
      }))

      return days
    }

    try {
      const days = await getBusyDays(getNext30Days().map((i) => i.dayNumber))
      setDaysOfMonth(
        days.map((day: any) => ({
          dayNumber: day.dayNumber,
          dayTitle: getWeeklyDay(
            new Date(new Date().setDate(day.dayNumber)).getDay()
          ),
          isBusy: day.isBusy,
        }))
      )
    } catch (error: any) {}
  }

  return (
    <ScheduleContext.Provider
      value={{ selectedDay, setSelectedDay, hours, daysOfMonth }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

export const useScheduleState = () => useContext(ScheduleContext)

export interface InitialStateProps {
  selectedDay: ISelectedDay
  setSelectedDay: any
  hours: string[]
  daysOfMonth: IDaysOfMonth[]
}
