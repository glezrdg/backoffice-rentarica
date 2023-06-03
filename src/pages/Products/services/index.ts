import { DataService } from "../../../config/api";
import axios from 'axios'
import { IProduct } from "../models/IProduct";
import { products } from "../utils/data";
import { ProductQueries } from "../models/ProductQueries";

export const getproducts = async (): Promise<IProduct[]> => {

  try {
    const { data } = await DataService.get('/products')
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const postProduct = async (body: IProduct): Promise<IProduct> => {
  try {
    const { data: product } = await DataService.post('/products', body)
    const { data } = await axios.post(`http://localhost:3000/api/products/${product._id}/images`, { images: body.images }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return data as IProduct
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateProduct = async (body: IProduct): Promise<IProduct> => {
  try {
    const { data } = await DataService.put(`/products/${body._id}`, body)
    return data as IProduct
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const deleteProduct = async (id: string): Promise<IProduct> => {
  try {
    const { data } = await DataService.delete(`/products/${id}`)
    return data as IProduct
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}