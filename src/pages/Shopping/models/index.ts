import { ISizes } from "../../../pages/Products/models/IProduct"

export interface IShopping {
  _id: string
  shoppingList: ShoppingList[]
  articleList: ArticleList[]
  total: number
  category: string
  createdAt: string
}

export interface ShoppingDTO {
  shoppingList: ShoppingList[]
  articleList: ArticleList[]
  category: string
  total: number
}

export interface ShoppingList {
  product: any
  price: number
  qty: number
  sizes: ISizes[]
  available?: number
}

export interface ArticleList {
  title: string
  description: string
  amount: number
}