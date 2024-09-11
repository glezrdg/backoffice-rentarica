import { IOrder } from "../../../pages/Orders/models/IOrder";
import { DataService } from "../../../config/api";
import { IDelivery } from "../models";
import { deliveries } from "../utils/data";
// import { Companys } from "../utils/data";
// let Companys: IDelivery[] = [{ code: '', description: '', product: '', provinces: [''], category: '', brand: '', discount: '' }]

export const getEmployees = async () => {
  try {
    const { data } = await DataService.get('/auth/employees')
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const postEmployee = async (body: IDelivery): Promise<IDelivery> => {
  try {
    const { data } = await DataService.post('/auth/employee', body)
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

export const getUserOrders = async (id: string): Promise<IOrder[]> => {
  try {
    const { data } = await DataService.get(`/orders/users/${id}`)
    return data as IOrder[]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}