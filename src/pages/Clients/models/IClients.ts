import { IShipping } from "../../../models"

export interface IClients {
  _id?: string
  fullname: string
  email: string
  shippingAddress: IShipping
  createdAt?: string
}