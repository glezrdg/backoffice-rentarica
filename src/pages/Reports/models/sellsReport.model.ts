import { IOrder } from "../../../pages/Orders/models/IOrder"
import { IProduct } from "src/pages/Products/models/IProduct"

export interface ISellsReport {
  _id: string
  ordersQty: number
  totalAmonutSell: number
  totalAmonutWin: number
  orders: IOrder[]
  productsQty: [{
    product: IProduct
    qty: number
  }]
  provincesQty: [{
    name: string
    qty: number
  }]
  paymentMethodQty: [{
    product: string
    qty: number
  }]
  month: number
  year: number
  createdAt: string
}