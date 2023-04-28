import { DataService } from "../../../config/api";
import { IClients } from "../models/IClients";
import { clients } from "../utils";

export const getClients = async (): Promise<IClients[]> => {
  try {
    // const { data } = await DataService.get('/Companys')
    // return data as IClients[] || Companys
    return clients
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addClient = async (body: IClients): Promise<IClients> => {
  try {
    // const { data } = await DataService.post('/clients', body)
    // return data as IClients
    return clients[0]
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