import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

// Services
import { CreateDoctorDto, Doctor } from '../models/doctor.model'
import { getDoctors, postDoctor } from '../services'

const initialState: InitialStateProps = {
  doctors: [],
  handleGetDoctors: () => {},
  handlePostDoctor: () => {},
}

const DoctorContext = createContext(initialState)

export interface DoctorProviderProps {
  children: ReactElement
}

export const DoctorProvider = ({ children }: any) => {
  const [doctors, setDoctors] = useState<Doctor[]>([])

  useEffect(() => {
    handleGetDoctors()
  }, [])

  const handleGetDoctors = async () => {
    try {
      const data = await getDoctors()
      setDoctors(data)
    } catch (error) {}
  }

  const handlePostDoctor = async (body: CreateDoctorDto) => {
    try {
      const data = await postDoctor(body)
      setDoctors((prev) => [...prev, data])
    } catch (error) {}
  }

  return (
    <DoctorContext.Provider
      value={{ doctors, handleGetDoctors, handlePostDoctor }}
    >
      {children}
    </DoctorContext.Provider>
  )
}

export const useDoctorState = () => useContext(DoctorContext)

export interface InitialStateProps {
  doctors: Doctor[]
  handleGetDoctors: () => void
  handlePostDoctor: (body: CreateDoctorDto) => void
}
