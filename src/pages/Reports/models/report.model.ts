import { ISellsReport } from "./sellsReport.model"
import { IShoppingReport } from "./shoppingReport"

export interface IReport {
  _id: string
  sellsReport: ISellsReport
  shoppingReport: IShoppingReport
  clientsQty: number
  month: number
  year: number
  createdAt: string
}
