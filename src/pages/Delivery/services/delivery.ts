import { DataService } from "../../../config/api";
import { IDelivery } from "../models";
import { deliveries } from "../utils/data";
// import { Companys } from "../utils/data";
// let Companys: IDelivery[] = [{ code: '', description: '', product: '', provinces: [''], category: '', brand: '', discount: '' }]

export const getDeliveries = async (): Promise<IDelivery[]> => {
  try {
    // const { data } = await DataService.get('/Companys')
    // return data as IDelivery[] || Companys
    return deliveries
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addDelivery = async (body: IDelivery): Promise<IDelivery> => {
  try {
    // const { data } = await DataService.post('/deliveries', body)
    // return data as IDelivery
    return deliveries[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateDelivery = async (id: string, body: IDelivery): Promise<IDelivery> => {
  try {
    const { data } = await DataService.put(`/deliveries/:${id}`, body)
    return data as IDelivery
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeDelivery = async (id: string): Promise<IDelivery> => {
  try {
    const { data } = await DataService.delete(`/deliveries/:${id}`)
    return data as IDelivery
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}