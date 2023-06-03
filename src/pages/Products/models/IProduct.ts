export interface IProduct {
  _id?: string
  name: string
  price: number
  description: string
  sizes: ISizes[]
  category: string
  brand: string
  ofert: string
  images: File
  qty: number
}

export interface ISizes {
  name: string
  qty: number
}