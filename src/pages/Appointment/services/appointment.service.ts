import { getQueryString } from "../../../utility/getQueryString"
import { DataService } from "../../../config/api"

export const getAppointments = async (queries: any = new Date().setHours(0, 0, 0, 0).toLocaleString()) => {
  try {
    const { data } = await DataService.get(`/appointment` + getQueryString(queries))
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const getAppointment = async (appointmentId: string) => {
  try {
    const { data } = await DataService.get(`/appointment/${appointmentId}`)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const getAppointmentDashboard = async () => {
  try {
    const { data } = await DataService.get(`/appointment/month/dashboard`)
    return data[0]
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

