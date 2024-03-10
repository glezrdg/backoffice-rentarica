import { IProduct } from "src/pages/Products/models/IProduct"
import { IShipping } from "../../../models"

export interface IOrder {
  _id?: string
  client: any
  orderItems: IOrderItem[]
  shippingAddress: IShipping
  paymentMethod: string
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  isDelivered: boolean
  deliveredAt?: string
  completed?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface IOrderItem {
  product: IProduct
  qty: number
  size: string
}