import { IOrder } from "../../../pages/Orders/models/IOrder";
import { DataService } from "../../../config/api";
import { IClients } from "../models/IClients";
import { clients } from "../utils";
import { IProvincesReport } from "@/models/ProvincesReport.model";

export const getClients = async (): Promise<IClients[]> => {
  try {
    const { data } = await DataService.get('/auth/clients')
    return data as IClients[]
    // return clients
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const getProvincesReport = async (): Promise<IProvincesReport> => {
  try {
    const { data } = await DataService.get('/reports/provinces/report')
    return data as IProvincesReport
    // return clients
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const getClientOrders = async (id: string): Promise<IOrder[]> => {
  try {
    const { data } = await DataService.get(`/orders/clients/${id}`)
    return data as IOrder[]
    // return clients
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateClient = async (id: string, body: IClients): Promise<IClients> => {
  try {
    const { data } = await DataService.put(`/clients/:${id}`, body)
    return data as IClients
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeClient = async (id: string): Promise<IClients> => {
  try {
    const { data } = await DataService.delete(`/clients/:${id}`)
    return data as IClients
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}