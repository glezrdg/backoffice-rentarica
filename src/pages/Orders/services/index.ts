import { DataService } from "../../../config/api";
import { IOrder } from "../models/IOrder";
import { orders } from "../utils/data";

export const getOrders = async (): Promise<IOrder[]> => {
  try {
    // const { data } = await DataService.get('/Companys')
    // return data as IOrder[] || Companys
    return orders
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addOrder = async (body: IOrder): Promise<IOrder> => {
  try {
    // const { data } = await DataService.post('/orders', body)
    // return data as IOrder
    return orders[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateOrder = async (id: string, body: IOrder): Promise<IOrder> => {
  try {
    const { data } = await DataService.put(`/orders/:${id}`, body)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const deliverOrder = async (id: string): Promise<IOrder> => {
  try {
    const { data } = await DataService.get(`/orders/deliver/:${id}`)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeOrder = async (id: string): Promise<IOrder> => {
  try {
    const { data } = await DataService.delete(`/orders/:${id}`)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}