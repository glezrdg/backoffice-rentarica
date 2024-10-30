import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

// Services
import { CreatePatientDto, Patient } from '../models/patient.model'
import { getPatients, postPatient } from '../services'

const initialState: InitialStateProps = {
  patients: [],
  handleGetPatients: () => {},
  handlePostPatients: () => {},
}

const PatientContext = createContext(initialState)

export interface PatientProviderProps {
  children: ReactElement
}

export const PatientProvider = ({ children }: any) => {
  const [patients, setPatients] = useState<Patient[]>([])

  useEffect(() => {
    handleGetPatients()
  }, [])

  const handleGetPatients = async () => {
    try {
      const data = await getPatients()
      setPatients(data)
    } catch (error: any) {
      console.log('Error get patients:', error.message)
    }
  }

  const handlePostPatients = async (body: CreatePatientDto) => {
    try {
      const data = await postPatient(body)
      setPatients((prev) => [...prev, data])
    } catch (error: any) {
      console.log('Error get patients:', error.message)
    }
  }

  return (
    <PatientContext.Provider
      value={{ patients, handleGetPatients, handlePostPatients }}
    >
      {children}
    </PatientContext.Provider>
  )
}

export const usePatientState = () => useContext(PatientContext)

export interface InitialStateProps {
  patients: Patient[]
  handleGetPatients: () => void
  handlePostPatients: (body: CreatePatientDto) => void
}
