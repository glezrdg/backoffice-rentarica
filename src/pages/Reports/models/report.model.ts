
import { ISellsReport } from "./sellsReport.model"
import { IShoppingReport } from "./shoppingReport"

export interface IReport {
  _id: string
  shoppingReport: IShoppingReport
  clientsQty: number
  month: number
  year: number
  createdAt: string
}
