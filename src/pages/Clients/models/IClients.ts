import { IShipping } from "../../../models"

export interface IClients {
  _id?: string
  name: string
  email: string
  shippingAddress: IShipping
  createdAt?: number
}