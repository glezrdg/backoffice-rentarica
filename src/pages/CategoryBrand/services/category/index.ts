import { DataService } from "../../../../config/api";
import { ICategory } from "../../models/ICategory";
import { categories } from "../../utils/data";

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    // const { data } = await DataService.get('/categories')
    // return data as ICategory[] || categories
    return categories
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addCategory = async (body: ICategory): Promise<ICategory> => {
  try {
    // const { data } = await DataService.post('/categories', body)
    // return data as ICategory
    return categories[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateCategory = async (id: string, body: ICategory): Promise<ICategory> => {
  try {
    const { data } = await DataService.put(`/categories/:${id}`, body)
    return data as ICategory
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeCategory = async (id: string): Promise<ICategory> => {
  try {
    const { data } = await DataService.delete(`/categories/:${id}`)
    return data as ICategory
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}
