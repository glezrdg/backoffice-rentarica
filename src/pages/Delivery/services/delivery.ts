import { DataService } from "../../../config/api";
import { IDelivery } from "../models";
import { deliveries } from "../utils/data";
// import { Companys } from "../utils/data";
// let Companys: IDelivery[] = [{ code: '', description: '', product: '', provinces: [''], category: '', brand: '', discount: '' }]

export const getDeliveries = async (): Promise<IDelivery[]> => {
  try {
    const { data } = await DataService.get('/delivery')
    return data as IDelivery[]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const postDelivery = async (body: IDelivery): Promise<IDelivery> => {
  try {
    const { data } = await DataService.post('/delivery', body)
    return data as IDelivery
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateDelivery = async (id: string, body: IDelivery): Promise<IDelivery> => {
  try {
    const { data } = await DataService.put(`/delivery/:${id}`, body)
    return data as IDelivery
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeDelivery = async (id: string): Promise<IDelivery> => {
  try {
    const { data } = await DataService.delete(`/delivery/:${id}`)
    return data as IDelivery
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}