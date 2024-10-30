import { DataService } from "../../../config/api"
import { CreateDoctorDto } from "../models/doctor.model"

export const postDoctor = async (body: CreateDoctorDto) => {
  try {
    const { data } = await DataService.post('/doctors', body)
    console.log('error', data)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const getDoctors = async () => {
  try {
    const { data } = await DataService.get('/doctors')
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}