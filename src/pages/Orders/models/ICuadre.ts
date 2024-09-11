import { IOrder } from "./IOrder"

export interface ICuadre {
  _id: string
  orders: IOrder[]
  entryMoney: number
  createdAt: number
  totalAmonutSell: number
  cash: number
  card: number
  transfer: number
}