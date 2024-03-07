import { ISellsReport } from "./sellsReport.model"
import { IShoppingReport } from "./shoppingReport"

export interface IReport {
  _id: string
  sellsReport: ISellsReport
  shoppingReport: IShoppingReport
  month: number
  year: number
  createdAt: string
}
