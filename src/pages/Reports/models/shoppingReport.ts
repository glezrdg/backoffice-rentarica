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
  month: number
  year: number
  createdAt: string
}