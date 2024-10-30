import { DataService } from "../../../config/api"
import { CreatePatientDto, Patient } from "../models/patient.model"

export const postPatient = async (body: CreatePatientDto) => {
  try {
    const { data } = await DataService.post('/patients', body)
    console.log('error', data)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const getPatients = async (): Promise<Patient[]> => {
  try {
    const { data } = await DataService.get('/patients')
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}