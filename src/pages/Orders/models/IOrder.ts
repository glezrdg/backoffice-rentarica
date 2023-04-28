import { IShipping } from "../../../models"

export interface IOrder {
  _id?: string
  client: string
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
  product: string
  qty: number
  size: string
}