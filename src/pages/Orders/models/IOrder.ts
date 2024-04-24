import { IProduct } from "src/pages/Products/models/IProduct"
import { IShipping } from "../../../models"

export interface IOrder {
  _id?: string
  user: any
  orderItems: IOrderItem[]
  paymentMethod: string
  amount: number
  totalPrice: number
  createdAt?: string
  updatedAt?: string
}

export interface IOrderItem {
  product: IProduct
  qty: number
  size: string
}