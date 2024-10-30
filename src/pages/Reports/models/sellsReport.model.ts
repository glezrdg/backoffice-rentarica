import { IOrder } from "../../../pages/Orders/models/IOrder"

export interface ISellsReport {
  _id: string
  ordersQty: number
  totalAmonutSell: number
  totalAmonutWin: number
  orders: IOrder[]
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