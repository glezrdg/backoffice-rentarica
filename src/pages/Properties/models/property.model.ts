export interface Property {
  _id: string
  title: string
  category: string
  type: string
  price: number
  active: boolean
  province: string
  description: string
  items: string[]
  images: string[]
  bathrooms: number
  rooms: number
  size: number
  floors: number
}

export interface CreatePropertyDto {
  title: string
  category: string
  description: string
  items: string[]
  images: any[]
  bathrooms: number
  rooms: number
  size: number
  floors: number
}