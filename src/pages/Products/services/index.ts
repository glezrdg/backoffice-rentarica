import { DataService } from "../../../config/api";
import { IProduct } from "../models/IProduct";
import { products } from "../utils/data";

export const getproducts = async (): Promise<IProduct[]> => {
  try {
    // const { data } = await DataService.get('/products')
    // return data as IProduct[] || products
    return products
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addProduct = async (body: IProduct): Promise<IProduct> => {
  try {
    // const { data } = await DataService.post('/products', body)
    // return data as IProduct
    return products[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateProduct = async (id: string, body: IProduct): Promise<IProduct> => {
  try {
    const { data } = await DataService.put(`/products/:${id}`, body)
    return data as IProduct
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeProduct = async (id: string): Promise<IProduct> => {
  try {
    const { data } = await DataService.delete(`/products/:${id}`)
    return data as IProduct
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}