import { ISizes } from "../../../pages/Products/models/IProduct"

export interface IShopping {
  _id: string
  shoppingList: ShoppingList[]
  total: number
  createdAt: string
}

export interface ShoppingDTO {
  shoppingList: ShoppingList[]
  total: number
}

export interface ShoppingList {
  product: any
  price: number
  qty: number
  sizes: ISizes[]
  available?: number
}