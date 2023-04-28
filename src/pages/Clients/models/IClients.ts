export interface IClients {
  _id?: string
  name: string
  email: string
  shippingAddress: IShipping
  createdAt?: number
}


export interface IShipping {
  province: string
  phone: number
  street1: string
  street2: string
  help: string
  delivery: string
}