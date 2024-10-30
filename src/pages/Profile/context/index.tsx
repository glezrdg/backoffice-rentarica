import { workSchedule } from '../../../utility/data'
import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
} from 'react'
import { IDoctorSchedule } from '../models/doctorSchedule'
import { getSchedule, patchSchedule } from '../services/schedule.service'
import { useAppSelector } from '../../../redux/store'
import { toast } from '../../../App'

const initialState: InitialStateProps = {
  doctorSchedule: workSchedule,
  setDoctorSchedule: () => {},
  handleUpdateSchedule: () => {},
}

const ProfileContext = createContext(initialState)

export interface ProfileProviderProps {
  children: ReactElement
}

export const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth)
  const [doctorSchedule, setDoctorSchedule] = useState<any>(workSchedule)

  useEffect(() => {
    handleGetSchedule()
  }, [])

  const handleGetSchedule = async () => {
    try {
      const schedule = await getSchedule(user._id)
      setDoctorSchedule(schedule)
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Error',
      })
    }
  }

  const handleUpdateSchedule = async () => {
    try {
      await patchSchedule(doctorSchedule, user._id)
      toast.current.show({
        severity: 'success',
        summary: 'Horario actualizado',
      })
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Error',
      })
    }
  }

  return (
    <ProfileContext.Provider
      value={{ doctorSchedule, setDoctorSchedule, handleUpdateSchedule }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileState = () => useContext(ProfileContext)

export interface InitialStateProps {
  doctorSchedule: IDoctorSchedule
  setDoctorSchedule: (body: any) => void
  handleUpdateSchedule: (body: IDoctorSchedule) => void
}
