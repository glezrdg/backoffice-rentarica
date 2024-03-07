import { IProduct } from "src/pages/Products/models/IProduct"

export interface IShoppingReport {
  _id: string
  shoppingQty: number
  totalAmountBuy: number
  productsQty: [{
    product: IProduct
    qty: number
  }]
  month: number
  year: number
  createdAt: string
}