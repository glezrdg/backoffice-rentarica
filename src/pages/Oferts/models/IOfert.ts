export interface IOfert {
  _id?: string
  code: string
  description: string
  category: string
  brand: string
  provinces: string[]
  product?: string
  discount: string
  disable?: boolean
  expireDate?: string
}