import { DataService } from "../../../config/api";
import { IOfert } from "../models/IOfert";
import { ofertsData } from "../utils/data";
// import { oferts } from "../utils/data";
// let oferts: IOfert[] = [{ code: '', description: '', product: '', provinces: [''], category: '', brand: '', discount: '' }]

export const getOferts = async (): Promise<IOfert[]> => {
  try {
    // const { data } = await DataService.get('/oferts')
    // return data as IOfert[] || oferts
    return ofertsData
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addOfert = async (body: IOfert): Promise<IOfert> => {
  try {
    // const { data } = await DataService.post('/oferts', body)
    // return data as IOfert
    return ofertsData[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateOfert = async (id: string, body: IOfert): Promise<IOfert> => {
  try {
    const { data } = await DataService.put(`/oferts/:${id}`, body)
    return data as IOfert
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeOfert = async (id: string): Promise<IOfert> => {
  try {
    const { data } = await DataService.delete(`/oferts/:${id}`)
    return data as IOfert
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}