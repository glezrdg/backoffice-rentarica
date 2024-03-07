import { DataService } from "../../../config/api";
import { IShopping } from "../models";
// import { Companys } from "../utils/data";
// let Companys: ICompany[] = [{ code: '', description: '', product: '', provinces: [''], category: '', brand: '', discount: '' }]

export const getShoppings = async (): Promise<IShopping[]> => {
  try {
    const { data } = await DataService.get('/shopping')
    return data as IShopping[]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const postShopping = async (body: Partial<IShopping>): Promise<IShopping> => {
  try {
    const { data } = await DataService.post('/shopping', body)
    return data as IShopping
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateShopping = async (id: string, body: IShopping): Promise<IShopping> => {
  try {
    const { data } = await DataService.put(`/shopping/:${id}`, body)
    return data as IShopping
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeShopping = async (id: string): Promise<IShopping> => {
  try {
    const { data } = await DataService.delete(`/shopping/:${id}`)
    return data as IShopping
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}