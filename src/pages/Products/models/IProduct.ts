export interface IProduct {
  _id?: string
  name: string
  price: number
  description: string
  size: ISizes[]
  category: string
  brand: string
  ofert: string
  images: string[]
  qty: number
}

export interface ISizes {
  name: string
  qty: number
}