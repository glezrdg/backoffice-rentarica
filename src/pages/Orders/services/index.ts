import { DataService } from "../../../config/api";
import { IOrder } from "../models/IOrder";

export const getOrders = async (query?: any): Promise<IOrder[]> => {
  let keys = Object.keys(query)
  let queryString: string = ''

  if (keys.length) {
    queryString += '?'

    keys?.map((item, i) => queryString += `${item}=${query[keys[i]]}&`)
  }


  try {
    const { data } = await DataService.get('/orders' + queryString)
    return data as IOrder[]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const getOneOrder = async (id: string): Promise<IOrder> => {
  try {
    const { data } = await DataService.get('/orders/' + id)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addOrder = async (body: IOrder): Promise<IOrder> => {
  try {
    const { data } = await DataService.post('/orders', body)
    return data as IOrder
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
    const { data } = await DataService.patch(`/orders/${id}/deliver`)
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