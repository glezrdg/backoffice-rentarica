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
  setDoctorSchedule: () => {},
  handleUpdateSchedule: () => {},
}

const ProfileContext = createContext(initialState)

export interface ProfileProviderProps {
  children: ReactElement
}

export const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  )
}

export const useProfileState = () => useContext(ProfileContext)

export interface InitialStateProps {}
