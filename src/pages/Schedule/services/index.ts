import { DataService } from "../../../config/api"

export const getBusyDays = async (body: number[]) => {
  try {
    const { data } = await DataService.post('/appointment/days/busy', body)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}