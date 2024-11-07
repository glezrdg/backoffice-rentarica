export interface Property {
  _id: string
  title: string
  category: string
  type: string
  price: number
  province: string
  sector: string
  description: string
  items: string[]
  images: string[]
  titleImages: any[]
  captacionImages: any[]
  bathrooms: number
  rooms: number
  size: number
  floors: number
  owner_name: string
  owner_contact: string
  airbnb: string
  isShared: boolean
  isNegotiable: boolean
  code: string
  isActive: boolean
}

export interface CreatePropertyDto {
  title: string
  type: string
  category: string
  price: number
  description: string
  province: string
  items: string[]
  images: any[]
  titleImages: any[]
  captacionImages: any[]
  bathrooms: number
  rooms: number
  size: number
  floors: number
  sector: string
  owner_name: string
  owner_contact: string
  airbnb: string
  isShared: boolean
  isNegotiable: boolean
  code: string
  isActive: boolean
}