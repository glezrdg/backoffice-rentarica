import { DataService } from "../../../config/api"
import { IDoctorSchedule } from "../models/doctorSchedule"

export const patchSchedule = async (body: IDoctorSchedule, doctorId: string) => {
  try {
    const { data } = await DataService.patch(`/doctors/schedule/${doctorId}`, body)
    console.log('error', data)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const getSchedule = async (doctorId: string) => {
  try {
    const { data } = await DataService.get(`/doctors/schedule/${doctorId}`)
    console.log('error', data)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}