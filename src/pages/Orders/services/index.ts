import { DataService } from "../../../config/api";
import { ICuadre } from "../models/ICuadre";
import { IOrder } from "../models/IOrder";

export const postOrder = async (body: any) => {
  try {
    const { data } = await DataService.post('/orders', body)
    console.log('error', data)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

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
    throw new Error(error.response.data.message || error.message)
  }
}

export const getOneOrder = async (id: string): Promise<IOrder> => {
  try {
    const { data } = await DataService.get('/orders/' + id)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}

export const addOrder = async (body: any): Promise<IOrder> => {
  try {
    const { data } = await DataService.post('/orders', body)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}

export const updateOrder = async (id: string, body: IOrder): Promise<IOrder> => {
  try {
    const { data } = await DataService.put(`/orders/:${id}`, body)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}

export const deliverOrder = async (id: string): Promise<IOrder> => {
  try {
    const { data } = await DataService.patch(`/orders/${id}/deliver`)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}

export const removeOrder = async (id: string): Promise<IOrder> => {
  try {
    const { data } = await DataService.delete(`/orders/:${id}`)
    return data as IOrder
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}

// CUADRES

export const postCuadre = async (body: any) => {
  try {
    const { data } = await DataService.post('/orders/cuadre', body)
    console.log('error', data)
    return data
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}

export const fetchCuadres = async (query?: any): Promise<any[]> => {
  let keys = Object.keys(query)
  let queryString: string = ''

  if (keys.length) {
    queryString += '?'

    keys?.map((item, i) => queryString += `${item}=${query[keys[i]]}&`)
  }


  try {
    const { data } = await DataService.get('/orders/section/cuadres' + queryString)
    return data as IOrder[]
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}

export const fetchOneCuadre = async (id: string): Promise<ICuadre> => {
  console.log('GET ONE CUADRE SERVICE')
  try {
    const { data } = await DataService.get('/orders/section/cuadres/' + id)
    return data as ICuadre
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}