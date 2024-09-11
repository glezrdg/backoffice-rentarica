import { IShopping } from "../../../pages/Shopping/models"
import { IProduct } from "src/pages/Products/models/IProduct"

export interface IShoppingReport {
  _id: string
  shoppingQty: number
  shoppings: IShopping[]
  totalAmountBuy: number
  productsQty: [{
    product: IProduct
    qty: number
  }]
  categoryQty: [{
    category: string,
    amount: number
    shoppings: string[]
    qty: number,
  }]
  month: number
  year: number
  createdAt: string
}