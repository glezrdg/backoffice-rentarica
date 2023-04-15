import { DataService } from "../../../../config/api";
import { IBrand } from "../../models/IBrand";
import { brands } from "../../utils/data";

export const getBrands = async (): Promise<IBrand[]> => {
  try {
    // const { data } = await DataService.get('/brands')
    // return data as IBrand[]
    return brands
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addBrand = async (body: IBrand): Promise<IBrand> => {
  try {
    // const { data } = await DataService.post('/brands', body)
    // return data as IBrand
    return brands[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateBrand = async (id: string, body: IBrand): Promise<IBrand> => {
  try {
    // const { data } = await DataService.put(`/brands/:${id}`, body)
    // return data as IBrand
    return brands[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeBrand = async (id: string): Promise<IBrand> => {
  try {
    // const { data } = await DataService.delete(`/brands/:${id}`)
    // return data as IBrand
    return brands[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}
